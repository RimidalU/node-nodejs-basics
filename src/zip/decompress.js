import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';
import { createUnzip } from 'zlib'

export const decompress = async () => {
    const pipelineAsync = promisify(pipeline);
    const gzip = createUnzip();

    const readableFile = path.resolve('files', 'archive.gz');
    const writableFile = path.resolve('files', 'fileToCompress.txt');

    const readable = createReadStream(readableFile);
    let writable = createWriteStream(writableFile);

    try {
        await pipelineAsync(
            readable,
            gzip,
            writable
        );
        console.log("Decompress accomplished!");
    } catch (error) {
        console.error('\x1b[31m', 'Decompress failed with error:', error);
    } 
};

decompress();