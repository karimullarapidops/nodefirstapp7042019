
// const fs = require('fs');

// fs.readFile('read.txt', 'utf8', (err, data) => {
//         fs.writeFileSync('b.txt', data);
// });

// fs.unlink('read.txt');
// fs.rmdirSync('stuff');

// fs.mkdir('node', function() {
//     fs.readFile('./node/read.txt', 'utf8', function (err, data)  {
//         console.log(data);
//         fs.writeFileSync('./node/write.txt', data);
//     });
// });

// fs.mkdir('node', function() {
//     fs.writeFile('./node/mynode.txt', "sdfghjkfg");
// });

// fs.unlink('./node/read.txt', function() {
//     fs.rmdir('node');
// });

// fs.rename('./tmp/hello.txt', './tmp/world.txt', (err) => {
//     if (err) throw err;
    // fs.stat('./tmp/world.txt', (err, stats) => {
    //   if (err) throw err;
    //   console.log(`stats: ${JSON.stringify(stats)}`);

//   });

// const http = require('http');
// const fs = require('fs');

// myReadStream.on('data', (chunk) => {
//     console.log('new chunk received:');
//     // console.log(chunk);
//     myWriteStream.write(chunk)
// });

// const server = http.createServer((req, res) => {
//     console.log('request was made: ' + req.url);
//     if ( req.url === '/home'  || req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     } else if(req.url === '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     } else if(req.url === '/api/kareem') {
//         let kareem = [{name: 'narendra', age: 29}, {name: 'vamsi', age: 25}];
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(kareem));
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
   
    // let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res);
    // res.end('Hii How Are you');
//     var myObj = {
//         name: 'kareem',
//         job: 'software',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));
//  });

// server.listen(3000);
// console.log('Server is listening Port 3000');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    // console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', (req, res) => {
    let data  =  {age:  29, job: 'Develoiper', hobbies: ['eating', 'dfghj', 'dfgu']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
