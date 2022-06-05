import { spawn } from "child_process";
import path from 'path';
import { argv } from 'process'

export const spawnChildProcess = async (args) => {
    const scriptFile = path.resolve('files', 'script.js');
    const child = spawn('node', [scriptFile, args]);
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
};

spawnChildProcess(argv);