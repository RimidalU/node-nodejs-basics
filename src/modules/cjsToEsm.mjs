import { sep, dirname } from 'path'
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

import { fileURLToPath } from 'url';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aJson = require('./files/a.json');
const bJson = require('./files/b.json');

let unknownObject;

if (random > 0.5) {
    unknownObject =  aJson;
} else {
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };