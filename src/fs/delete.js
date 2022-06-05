import { rm } from 'fs/promises';
import path from 'path';

export const remove = async () => {
    const rmFile = path.resolve('files', 'fileToRemove.txt');
    try {
        await rm(rmFile)
    } catch (error) {
        console.error('\x1b[31m',new Error('FS operation failed'))
    }
};

remove();