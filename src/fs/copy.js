import { cp } from 'fs/promises';
import path from 'path';

export const copy = async () => {
    const outFolder = path.resolve('files');
    const inFolder = path.resolve('files_copy');
    try {
        await cp(outFolder, inFolder, {
            errorOnExist: true,
            force: false,
            recursive: true
        })
    } catch (error) {
        console.error('\x1b[31m', new Error('FS operation failed'))
    }
};

copy();