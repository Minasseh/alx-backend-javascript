process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n')
process.stdin.on('data', function(data) {
  var name = data.trim();
  if (name !== null) {
    process.stdout.write('Your name is: ' + name + '\n');
    process.stdin.end()
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});
