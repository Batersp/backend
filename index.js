let http = require('http');
let {usersController} = require('./usersController')

process.on('unhandledRejection', function (reason, p) {
    console.log(reason,p)
})

let cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true;
    } else {
        return false
    }
}

let server = http.createServer((req, res) => {
    console.log('req')
    if (cors(req, res)) return
    switch (req.url) {
        case '/users':
            usersController(req, res)
            break
        case '/lessons':
            res.write('TASKS')
            break
        default:
            res.write('Page NOT FOUND')
    }
});

server.listen(1488)