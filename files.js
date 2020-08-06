const fs = require('fs');

// read files
fs.readFile('./transcript.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

// console.log('last line');

// write files
fs.writeFile('./transcript1.txt', 'hello, again', () => {
    console.log('file was written');
});

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// deleting files
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("file deleted!");
    })
}