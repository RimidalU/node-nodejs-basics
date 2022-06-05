import { spawn } from "child_process";
import path from 'path';
import { argv } from 'process'

const dataToChild = 'child process stdin receives input from master process stdin' 

export const spawnChildProcess = async (args) => {
    const scriptFile = path.resolve('files', 'script.js');
    const child = spawn('node', [scriptFile, args]);

    //child process stdout sends data to master process stdout
    child.stdout.pipe(process.stdout);

    //child process stdin receives input from master process stdin
    child.stdin.write(dataToChild);

    child.stdin.end();
};

spawnChildProcess(argv);