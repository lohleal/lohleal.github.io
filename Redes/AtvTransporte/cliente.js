const dgram = require('dgram');
const readline = require('readline');

function sendMessage(host, port, message) {
    const client = dgram.createSocket('udp4');
    
    client.send(message, port, host, (err) => {
        if (err) {
            console.error('Erro ao enviar mensagem:', err);
        }
        client.close();
    });
}

const HOST = 'localhost';
const PORT = 9000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForMessage() {
    rl.question('Type your message: ', (message) => {
        sendMessage(HOST, PORT, message);
        askForMessage(); 
    });
}

askForMessage(); 