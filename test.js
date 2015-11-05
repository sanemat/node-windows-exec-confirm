var spawn = require('child_process').spawn;
var touch1 = spawn('npm', ['run', 'touch1'], { stdio: 'inherit' });
touch1.on('error', function(err) {
  console.error(err);
});
