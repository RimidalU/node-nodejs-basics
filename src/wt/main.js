import { Worker } from 'worker_threads'
import path from 'path';
import { cpus } from 'os';

export const performCalculations = async () => {
    const cpuCores = cpus().length
    const workerFile = path.resolve('worker.js');
    let workerArr = []

    for (let i = 0; i < cpuCores; i++) {
        workerArr.push(
            new Promise((res, rej) => {
                const worker = new Worker(workerFile, {
                    workerData: i + 10
                })
                worker.on('message', res);
                worker.on('error', rej);
            })
        )
    }
    const resultPromise = await Promise.all(workerArr)
    console.log(resultPromise);
    return resultPromise
}

performCalculations();