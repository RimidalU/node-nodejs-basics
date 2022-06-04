import { readdir } from 'fs/promises';
import path from 'path';

export const list = async () => {
    const outFolder = path.resolve('files');
    try {
        const files = await readdir(outFolder);
    console.log(files.toString());
    } catch (error) {
        console.error('\x1b[31m',new Error('FS operation failed'))
    }
};

list();
