var mqtt = require('mqtt')

if (process.argv.length < 5) {
    console.log("Usage: publisher.js mqtt://test.mosquitto.org /hello/world 20");
    return -1;
}

var host    = process.argv[2];
var topic   = process.argv[3];
var cnt     = process.argv[4];
var client  = mqtt.connect(host);

(() => {
    
    console.log("Connecting to", host);
    client.on('connect', () => {
        console.log("connected..");
        
        console.log("warmup..")
        for (var i = 0; i < cnt / 10 ; i++) {
            client.publish(topic, "*#*");
        }

        console.log("pushing " + cnt + " messages..");
        console.time("published");
        for (var i = 0; i < cnt; i++) {
            var msg = 'Hello #' + i;
            // console.log(" << ", msg)
            client.publish(topic, msg);
        }
        console.timeEnd("published");

        client.end();
    });

})();