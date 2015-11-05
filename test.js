var spawn = require('child_process').spawn;
var which = require('which');

console.log('process.cwd()');
console.log(process.cwd());
console.log('process.env.PATH');
console.log(process.env.PATH);

which('npm', function (error, resolvedPath) {
  if (error) {
    console.error('which npm: error');
    console.error(error);
    return;
  }
  console.log('which npm:');
  console.log(resolvedPath);
});

var touch1 = spawn('npm', ['run', 'touch1', '--verbose'], { stdio: 'inherit' });
touch1.on('error', function(err) {
  console.error(err);
  process.exit(1);
});
