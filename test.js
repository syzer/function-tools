import test from 'ava'
import ost from 'object-stream-tools'
import { split } from 'ramda'
import { readFile, readFileStream, writeFile } from './index'

test('map and fork works ok', t => {
    const test = readFile(__dirname + '/README.md')
        .map(e => e.split(/\n|\t/gi))
        .chain(contents => writeFile(__dirname + '/.tmp.md', contents))

    test.fork(() => t.fail('Error running file'), () => t.pass())
})

test('can pipe', t => {
    const test = readFileStream(__dirname + '/README.md')
        .map(ost.map(e => e.split(/\n|\t/gi))
        .pipe(process.stdout))

    test.fork(() => t.fail('Error running file'), () => t.pass())
})

test('using with ramda', t => {
    const test = readFile(__dirname + '/README.md')
        .map(split(/\n|\t/gi))
        .chain(contents => writeFile(__dirname + '/.tmp.md', contents))

    test.fork(() => t.fail('Error running file'), () => t.pass())
})
