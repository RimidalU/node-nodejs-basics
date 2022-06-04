import { rename as renameFile } from 'fs/promises';
import { access, constants } from 'fs';
import path from 'path';

export const rename = async () => {
    const oldFile = path.resolve('files', 'wrongFilename.txt');
    const newFile = path.resolve('files', 'properFilename.md');
    
    try {
        access(newFile, constants.F_OK, (err) => err)
        await renameFile(oldFile, newFile)    
    } catch (error) {
        console.error('\x1b[31m',new Error('FS operation failed'))
    }
};

rename();
