const exec = require('child_process').exec;
var child;

const start = '.com:';
const end = '.git';
const url = 'https://github.com/';

child = exec("git remotes", function (error, stdout) {
    const repoFullName = stdout.substring(
        stdout.indexOf(start) + 5,
        stdout.indexOf(end)
    );
    console.log('repoFullName   ', repoFullName);
    console.log('link: ', url + repoFullName);
    exec("git branch | grep \\* | cut -d ' ' -f2", function(error, stdout) {
        console.log('current branch: ', stdout);
        const branchName = stdout.trim();
        console.log("Creating PR");
        exec("git push -u origin", function(error, stdout) {
            console.log('New PR ready to open:');
            console.log(url + repoFullName + '/compare/' + branchName + '?expand=1');
        })
    })
});
