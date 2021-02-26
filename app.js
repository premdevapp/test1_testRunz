var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://192.168.1.113:1883');


client.on('connect', () => {
console.log('Connected to mqtt Server');
client.subscribe('Dht');
//client.subscribe('PIRsensor');
});

client.on('close', () => {
console.log('mqtt Server closed');
});

client.on('message', (Dht, message) => {
console.log(message.toString());
});

/* client.on('message', (Ultrasonicsensor, message) => {
    console.log(message.toString());
    }); */