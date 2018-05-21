## mosquitto-test

small script to test [mosquitto](https://github.com/eclipse/mosquitto) MQTT serivce using nodejs [mqtt](https://github.com/mqttjs/MQTT.js) library

### Usage:

Subsribe:
```
nodejs subscriber.js mqtt://192.168.1.80 /hello/world
```
or Ctrl-Shift-B in vscode

Publish test sequence:
```
nodejs publisher.js mqtt://192.168.1.80 /hello/world 100000
```
or Run Test Task in vscode

Ouput:
```
Connecting to mqtt://192.168.1.80
connected..
warmup..
pushing 100000 messages..
published: 8155ms
```
