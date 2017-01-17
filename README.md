# WAT

Small (hopefully) library to interact with files in Functional Programming Style.

## AKA
All monad goodies of functional programing : `ramda`, `data.task` now combined with streams and node file programs.


# How
```bash
npm install function-file-tools --save
```


# Usage

## Using es2015 style with object-stream-tools

```js
const { readFileStream } = require('function-file-tools')
const ost = require('object-stream-tools')

const app = readFileStream(__dirname + '/README.md')
    .map(ost.map(e => e.split(/\n|\t/gi))
    .pipe(process.stdout))

app.fork(console.error, console.log)
```

## Using ramda curried functions

```js
const { readFileStream } = require('function-file-tools')
const ost = require('object-stream-tools')
const { split } = require('ramda')

const app = readFileStream(__dirname + '/README.md')
    .map(ost.map(split(/\n|\t/gi))
    .pipe(process.stdout))

app.fork(console.error, console.log)
```


## Using node v.7 with --harmony

```js
import { readFile, readFileStream, writeFile } from 'function-file-tools'

const app = readFile(__dirname + '/README.txt')
        .map(e => e.split(/\n|\t/gi))
        .chain(contents => writeFile(__dirname + '/.tmp.txt', contents))

// when you want to have side effect
app.fork(console.error, console.log)
```


# Test

```
ava test
```
