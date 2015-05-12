#!/usr/bin/env node
var open = require('./open')

var argv = process.argv
argv.shift()
argv.shift()

open(argv.shift())