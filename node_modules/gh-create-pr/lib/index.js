#!/usr/bin/env node
'use strict';

//System Imports
const exec = require('child_process').exec;

//Project Imports
const { REMOTES_CMD } = require('./constants');
const onRemotes = require('./functions');

//Trigger first command and chain of callbacks
exec(REMOTES_CMD, onRemotes);