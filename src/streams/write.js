import fs from 'fs';
import path from 'path';
import process from 'process';
import readLine from 'readline';

export const write = async () => {
    const pathFile = path.resolve('files', 'fileToWrite.txt');

    const consoleStream = readLine.createInterface(process.stdin, process.stdout);
    const writeStream = fs.createWriteStream(pathFile, 'utf-8');

    console.log('Привет! Начнём тест! Введи, пожалуйста, текст: \n')

    function exit() {
        console.log('Ввод текста закончен. До свидания! \n');
        consoleStream.close()
    };

    consoleStream
        .on('line', (data) => {
            if (data === 'exit' || data === 'Exit') {
                exit()
            }
            else {
                console.log('Продолжим ввод?(для выхода набери exit или нажми ctrl+c): \n')
                writeStream.write(`${data} \n`)
            }
        })

        .on('SIGINT', () => { exit() })
        .on('error', error => console.log('Error', error.message));
};


write()
