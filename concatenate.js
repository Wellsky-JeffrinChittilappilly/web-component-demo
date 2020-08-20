const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/web-component-demo/runtime.js',
        './dist/web-component-demo/polyfills.js',
        './dist/web-component-demo/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/web-component-demo/styles.css', 'elements/styles.css')
    await fs.copy('./dist/web-component-demo/assets/', 'elements/assets/' )
    
})()