# WAT

Small (hopefully) library to interact with files in Functional Programmming Style


# How
```bash
npm install function-tools --save
```


# Usage

```js
import { readFile, readFileStream, writeFile } from 'fp'

const test = readFile(__dirname + '/README.txt')
        .map(e => e.split(/\n|\t/gi))
        .chain(contents => writeFile(__dirname + '/.tmp.txt', contents))

test.fork(console.error, console.log)
```


# Test

```
ava test
```
