// import { createReadStream, createWriteStream } from 'fs';
// import path from 'path';
import { stdin, stdout } from 'process'
import { pipeline } from 'stream';
import { promisify } from 'util';
import { Transform } from "stream";


export const transform = async () => {

    const pipelineAsync = promisify(pipeline);
    const readable = stdin;
    let writable = stdout;

    // const readableFile = path.resolve('files', 'fileToRead.txt');
    // const writableFile = path.resolve('files', 'output.text');
    // const readable = createReadStream(readableFile);
    // let writable = createWriteStream(writableFile);

    const reverseChunk = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });
    try {
        await pipelineAsync(
            readable,
            reverseChunk,
            writable
        );
        console.log("Transform accomplished!");
    } catch (error) {
        console.error('\x1b[31m', 'Transform failed with error:', error);
    }
}

transform();