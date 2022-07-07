import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
let langs = require('langs');
let colors = require('colors');

let input = process.argv[2];

let langcode = franc(input);

try {
    let language = langs.where("3", langcode);
    console.log(`Our best guess for your language is : ${language.name}`.brightGreen);
}
catch (e) {
    console.log("OH, Sorry, we are unable to detect your language, Please try with more sample text".brightRed)
    console.log(`The Error is: ${e}`.brightRed)
}
