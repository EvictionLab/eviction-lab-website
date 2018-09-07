import gulp from "gulp";
import sass from "gulp-sass";
import cssnano from "cssnano";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import postcss from "gulp-postcss";
import cssnext from "postcss-cssnext";
import BrowserSync from "browser-sync";

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];

/**
 * Build the site using Hugo
 */
const buildSite = (cb, options, environment = "development") => {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;
  process.env.NODE_ENV = environment;
  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
};

/**
 * Compile SASS styles for website
 */
const compileStyle = () => {
  return gulp.src("./src/sass/main-sass.scss")
    .pipe(sass()) // Using gulp-sass
    .pipe(postcss([cssnext({browserslist: [ ">= 1% in US" ]}), cssnano()]))
    .pipe(gulp.dest("./dist/css"));
};

/**
 * Watch site files and recompile on changes
 */
const watchMarkup = () => {
  return gulp.watch("./site/**/*", buildSite);
};

/**
 * Watch styles and recompile on changes
 */
const watchStyle = () => {
  return gulp.watch("./src/sass/**/*.scss", compileStyle);
};

const compile = gulp.parallel(buildSite, compileStyle);
compile.description = "compile all sources";

// Not exposed to CLI
const startServer = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
};

const server = gulp.series(compile, startServer);
server.description = "serve compiled source on local server at port 3000";

const watcher = gulp.parallel(watchMarkup, watchStyle);
watcher.description = "watch for changes to all source";

const defaultTasks = gulp.parallel(server, watcher);

export {
  compile,
  buildSite,
  compileStyle,
  server,
  watcher,
  watchMarkup,
  watchStyle
};

export default defaultTasks;
