import path from 'path';
import { readFile } from "fs/promises";
import crypto from "crypto";

export const calculateHash = async () => {
    const pathFile = path.resolve('files', 'fileToCalculateHashFor.txt');
    const file = await readFile(pathFile);
    const hexHash = crypto
                        .createHash('sha256')
                        .update(file)
                        .digest('hex')
    console.log(`hex Hash: ${hexHash}`);
    return hexHash;
};

calculateHash();