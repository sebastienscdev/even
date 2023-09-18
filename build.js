const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const fs = require('fs');
const sass = require('sass');
const nanocss = require('cssnano');

const FgRed = "\x1b[31m";
const FgGreen = "\x1b[32m"
const FgMagenta = "\x1b[35m"

var watch = require('node-watch');

const cwd = process.cwd();

if (!fs.existsSync('./dist')) {
    fs.mkdir('dist');
}


const isWatching = process.argv.slice(2).includes('--watch');

if (isWatching){
    console.log(FgMagenta, `Watching for changes in ${cwd}/scss`);
    watch(`${cwd}/scss`, { recursive: true }, function (evt, name) {
        console.log(FgMagenta, `${name} changed.`);
        compile();
    });
}

function compile(){
    console.log(FgMagenta, `Compiling even.scss`);
    sass.render({
        file: `./scss/even.scss`,
        precision: 6,
    }, (err, result) => {
        if (err) {
            console.error(FgRed, "\n\n Erreur lors de la compilation \n\n");
            console.error(FgRed, err);
        } else {
            postcss([autoprefixer, nanocss])
                .process(result.css, {
                    from: undefined,
                    to: './dist/even.css',
                    map: {
                        inline: false
                    }
                })
                .then(result => {
                    console.log(FgGreen, 'Compiled even.css !');
                    fs.writeFileSync(`${cwd}/dist/even.css`, result.css, () => true);
                    if (result.map) {
                        fs.writeFileSync(`${cwd}/dist/even.css.map`, result.map, () => true);
                    }
                }).catch((error)=>{
                    console.error(FgRed, error);
                });
        }
    });
}

compile();