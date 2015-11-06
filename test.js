var spawn = require('child_process').spawn;
var iswin = require('iswin');
console.log('process.cwd()');
console.log(process.cwd());
console.log('process.env.PATH');
console.log(process.env.PATH);
var cmd = (iswin()) ? 'npm.cmd' : 'npm';
var touch1 = spawn(cmd, ['run', 'touch1', '--verbose'], { stdio: 'inherit' });
touch1.on('error', function(err) {
  console.error(err);
  process.exit(1);
});
