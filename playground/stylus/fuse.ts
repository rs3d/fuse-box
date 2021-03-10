import { sparky, fusebox, pluginPostCSS, pluginLess } from '../../src';
import * as path from 'path';
import * as precss from 'precss';

class Context {
  isProduction;
  runServer;
  getConfig() {
    return fusebox({
      target: 'browser',
      entry: 'src/index.tsx',
      webIndex: {
        template: 'src/index.html',
      },
      tsConfig: 'src/tsconfig.json',

      stylesheet: {
        paths: [path.join(__dirname, 'src/config')],
      },

      cache: false,

      watch: true,
      hmr: true,
      //plugins: [pluginLess('*.less', { asText: true, useDefault: true })],
      devServer: true,
    });
  }
}
const { task, exec, rm } = sparky<Context>(Context);

task('default', async ctx => {
  rm('./dist');
  ctx.runServer = true;
  const fuse = ctx.getConfig();
  await fuse.runDev();
});

task('preview', async ctx => {
  ctx.runServer = true;
  ctx.isProduction = true;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: true });
});
task('dist', async ctx => {
  ctx.runServer = false;
  ctx.isProduction = true;
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
