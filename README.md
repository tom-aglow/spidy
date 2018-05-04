# spider-man-names

list of some spider-man characters names

[![Build Status](https://img.shields.io/travis/tom-aglow/spidy.svg?style=flat)](https://travis-ci.org/tom-aglow/spidy)
[![codecov](https://img.shields.io/codecov/c/github/tom-aglow/spidy.svg?style=flat)](https://codecov.io/gh/tom-aglow/spidy)
![npm](https://img.shields.io/npm/dt/spider-man-names.svg)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/spider-man-names.svg)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/tom-aglow/spidy/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

## the problem

make your unit tests more interesting with cool names of spider-man comic characters instead of well-known guy `'John Doe'`

## this solution

this module exposes an API for you to get a random character name every time you call it

## installation

this module is distributed via NPM which is bundled with Node.js and should be installed as one of your project's dependencies:

```
npm install spider-man-names
```

or

```
yarn add spider-man-names
```

alternatively you can get the UMD build which is also published to the npm registry and is therefore available via https://unpkg.com:

* https://unpkg.com/spider-man-names@latest/dist/index.umd.js
* https://unpkg.com/spider-man-names@latest/dist/index.umd.min.js

the UMD build exposes the module as a global called `spiderManNames` or as an unnamed module for AMD/CommonJS (require it by its file path)

## usage

```javascript
const spiderManNames = require('spider-man-names') // CommonJS
console.log(spiderManNames.random()) // Lizard
```

## API

| Method   | Result type | Result description      |
| -------- | ----------- | ----------------------- |
| all      | array       | all character's names   |
| random() | string      | random character's name |

## example

JS Bin [playground](http://jsbin.com/pifuqicetu/edit?html,js,console)

## thanks

thanks to @kentcdodds for his awesome [workshop](https://frontendmasters.com/courses/open-source/)

## license

MIT © [ohhhh.me](http://ohhhh.me)
