const dgram = require('dgram');

function startServer(host, port) {
    const server = dgram.createSocket('udp4');
    
    server.on('error', (err) => {
        console.error(`Server error:\n${err.stack}`);
        server.close();
    });
    
    server.on('message', (msg, rinfo) => {
        console.log(`[CLIENTE]: ${msg}`);
    });
    
    server.on('listening', () => {
        const address = server.address();
        console.log(`Servidor UDP iniciado em ${address.address}:${address.port}`);
    });
    
    server.bind(port, host);
}

const HOST = 'localhost';
const PORT = 9000;

startServer(HOST, PORT);