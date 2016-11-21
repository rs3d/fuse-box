const build = require("./build/commonjs/index.js");

const FuseBox = build.FuseBox;
const fs = require("fs");
//new build.BabelPlugin(),

let fuseBox = new FuseBox({
    homeDir: "test/fixtures/cases/ts",
    //modulesFolder: "test/fixtures/modules",
    cache: true,
    //plugins: [build.HTMLPlugin, build.JSONPlugin, new build.CSSPlugin({ minify: true })]
});
//fuseBox.bundle("**/*.*(js|html) >index.js", false).then(data => {



fuseBox.bundle(">index.ts", true).then(data => {
    fs.writeFile("./out.js", data, function(err) {
        if (err) {
            console.log(err);
        }
    });
}).catch(e => {
    console.log(e);
})