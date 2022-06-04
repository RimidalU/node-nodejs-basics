import { argv } from 'node:process'

export const parseArgs = () => {
    const argvArr = argv.slice(2);

    for (let i = 0; i < argv.length - 2; i = i + 2)
        if (argvArr[i].slice(0, 2) == '--') { console.log(`${argvArr[i]} is ${argvArr[i + 1]}`) }
        else { i = i - 1 }
};

parseArgs();