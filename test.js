var spawn = require('cross-spawn-async');
console.log('process.cwd()');
console.log(process.cwd());
console.log('process.env.PATH');
console.log(process.env.PATH);
console.log('process.env.PATHEXT');
console.log(process.env.PATHEXT);
var touch1 = spawn('npm', ['run', 'touch1', '--verbose'], { stdio: 'inherit' });
touch1.on('error', function(err) {
  console.error(err);
  process.exit(1);
});
