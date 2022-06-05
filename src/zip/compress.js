import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';
import { createGzip } from 'zlib'


export const compress = async () => {
    const pipelineAsync = promisify(pipeline);
    const gzip = createGzip();

    const readableFile = path.resolve('files', 'fileToCompress.txt');
    const writableFile = path.resolve('files', 'archive.gz');

    const readable = createReadStream(readableFile);
    let writable = createWriteStream(writableFile);

    try {
        await pipelineAsync(
            readable,
            gzip,
            writable
        );
        console.log("Compress done!");
    } catch (error) {
        console.error('\x1b[31m', 'Compress failed with error:', error);
    }
};

compress();