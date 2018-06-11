'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const START = exports.START = ':';
const END = exports.END = '.git';
const URL = exports.URL = 'https://github.com/';
const REMOTES_CMD = exports.REMOTES_CMD = 'git remotes';
const BRANCH_NAME = exports.BRANCH_NAME = 'git branch | grep \\* | cut -d \' \' -f2';
const PUSH_BRANCH = exports.PUSH_BRANCH = 'git push -u origin';