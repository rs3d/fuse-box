import {BundleProducer} from "../core/BundleProducer";
import {FuseBox} from "../index";
import {should} from "fuse-test-runner";

export class ConfigTest {
    "Should throw if modulesFolder is the same as homeDir"() {
        should().throwException(() => {
            FuseBox.init({
                homeDir: "C:/projects/Fuse-Box/fuse-box",
                output: ".fusebox/test-bundle/$name.js",
                modulesFolder: "C:/projects/Fuse-Box/fuse-box"
            })
        })
    }

    "Should not throw if modulesFolder is not the same as homeDir"() {
        FuseBox.init({
            homeDir: "C:/projects/Fuse-Box/fuse-box",
            output: ".fusebox/test-bundle/$name.js",
            modulesFolder: "C:/projects/Fuse-Box/fuse-box2"
        })
    }

    "Should not throw if modulesFolder is the same as homeDir last path segment"() {
        FuseBox.init({
            homeDir: "C:/projects/Fuse-Box/fuse-box",
            output: ".fusebox/test-bundle/$name.js",
            modulesFolder: "fuse-box"
        })
    }

    "Should not throw if modulesFolder with relative path  is the same as homeDir"() {
        FuseBox.init({
            homeDir: "C:/projects/Fuse-Box/fuse-box",
            output: ".fusebox/test-bundle/$name.js",
            modulesFolder: "./fuse-box"
        })
    }

    "Should not throw if modulesFolder with relative path and ends with slash  is the same as homeDir"() {
        FuseBox.init({
            homeDir: "C:/projects/Fuse-Box/fuse-box",
            output: ".fusebox/test-bundle/$name.js",
            modulesFolder: "../fusebox/"
        })
    }
}