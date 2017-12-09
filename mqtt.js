const express = require('express')
const mqtt = require('mqtt')

const app = express()
const client  = mqtt.connect('mqtt://iot.eclipse.org')

client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello MQTT... Ctrl + C to exit')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))