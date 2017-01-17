import test from 'ava'
import { readFile, readFileStream, writeFile } from './index'

test(t => {
    const test = readFile(__dirname + '/README.txt')
        .map(e => e.split(/\n|\t/gi))
        .chain(contents => writeFile(__dirname + '/.tmp.txt', contents))

    test.fork(() => t.fail('Error running file'), () => t.pass())
})

