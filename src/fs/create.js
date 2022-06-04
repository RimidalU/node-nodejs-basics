import { writeFile } from 'fs/promises';
import path from 'path';

export const create = async () => {
    const outFile = path.resolve('files', 'fresh.txt');
    try {
        await writeFile(outFile, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        console.error('\x1b[31m',new Error('FS operation failed'))
    }
};

create()