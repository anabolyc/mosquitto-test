var mqtt = require('mqtt')

if (process.argv.length < 4) {
    console.log("Usage: subscriber.js mqtt://test.mosquitto.org /hello/world");
    return -1;
}

var host    = process.argv[2];
var topic   = process.argv[3];
var client  = mqtt.connect(host);

(() => {
    
    console.log("Connecting to", host);
    client.on('connect', () => {
        console.log("connected..");
        client.subscribe(topic)
        console.log("subscribed to topic", topic);
    });

    client.on('message', (topic, message) => {
        console.log(" >> ", message.toString())
    });

})();