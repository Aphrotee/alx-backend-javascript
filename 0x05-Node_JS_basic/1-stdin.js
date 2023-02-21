function requestName() {
  process.stdin.on('readable',
    () => {
      process.stdout.write('Welcome to Holberton School, what is your name?');
      const input = process.stdin.read();
      if (input !== null) {
        process.stdout.write('Your name is: ' + input);
      }
    }
  );
  process.stdin.on('end',
    () => {
      process.stdout.write('This important software is now closing');
    }
  );
}

requestName();