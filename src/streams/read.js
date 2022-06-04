import fs from 'fs';
import path from 'path';

export const read = async () => {
    const pathFile = path.resolve('files', 'fileToRead.txt');

const readStream = fs.createReadStream(pathFile, 'utf-8');

readStream
.on('data', (chunk) => console.log(chunk))
.on('error', (error) => console.error('\x1b[31m','Error', error.message));
};

read();