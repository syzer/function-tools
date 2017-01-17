const fs = require('fs')
const Task = require('data.task')
const ost = require('object-stream-tools')

const readFile = filename =>
    new Task((rej, res) =>
        fs.readFile(filename, 'utf-8', (err, contents) =>
            err ? rej(err) : res(contents)))

const writeFile = (filename, contents) =>
    new Task((rej, res) =>
        fs.writeFile(filename, contents, (err, success) =>
            err ? rej(err) : res(success)))

const readFileStream = filename =>
    new Task((rej, res) =>
        ost.streamToPromise(fs.createReadStream(filename, 'utf-8'))
            .then((err, data) =>
                err ? rej(err) : res(contents)))

module.exports = {
    readFile, writeFile, readFileStream
}
