const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
    // return src('sarenka-sass/**/*.scss') // wejsciowy plik
    return src('sass/**/*.scss') // zmiana nasluchiwania gdy nadpisuje biblioteke
        .pipe(sass())
        .pipe(purgecss({content: ['*.html']})) // zmniejszony css - ma tylko klasy ktore sa uzywane
        .pipe(dest('css')) // wyjsociwy foldrer
}

function watchTask(){
    //rebuild gdy zmieni sie jaskiś .scss albo jakiś html 
    watch(['sass/**/*.scss', '*.html'], buildStyles) // zmiana nasluchiwania gdy nadpisuje biblioteke
}

exports.default = series(buildStyles, watchTask) // kompilacja w kolejnosci