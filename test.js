var spawn = require('child_process').spawn;
spawn('npm', ['run', 'touch1'], { stdio: 'inherit' });
