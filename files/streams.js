// Create read stream
const fs = require('fs');

const readStream = fs.createReadStream('./transcript.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('blog4.txt');

// read data and write to a file
readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK ------');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});

// piping - shorter way to directly read and write in one line of code! 
readStream.pipe(writeStream);