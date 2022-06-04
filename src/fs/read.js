import fs from 'fs';
import path from 'path';

export const read = async () => {
const pathFile = path.resolve('files', 'fileToRead.txt');

const readStream = fs.createReadStream(pathFile, 'utf-8');

readStream
.on('data', (chunk) => console.log(chunk))
.on('error', () => console.error('\x1b[31m',new Error('FS operation failed')));
};

read();