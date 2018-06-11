'use strict';

//System Imports
const exec = require('child_process').exec;

//Project Imports
const {
    URL,
    PUSH_BRANCH,
    START,
    END,
    BRANCH_NAME
} = require('./constants');

const handleError = error => {
    if (error) {
        console.error(error);
    }
};

const onPushBranch = (repoName, branchName) => error => {
    handleError(error);
    console.log('New PR ready to open:');
    console.log(`${URL}${repoName}/compare/${branchName}?expand=1`);
};

const onBranchName = repoName => (error, stdout) => {
    handleError(error);
    console.log('current branch: ', stdout);
    const branchName = stdout.trim();
    console.log('Creating PR');
    exec(PUSH_BRANCH, onPushBranch(repoName, branchName));
};

const onRemotes = (error, stdout) => {
    handleError(error);
    const repoName = stdout.substring(stdout.indexOf(START) + 1, stdout.indexOf(END));
    console.log(`link: ${URL}${repoName}`);
    exec(BRANCH_NAME, onBranchName(repoName));
};

module.exports = onRemotes;