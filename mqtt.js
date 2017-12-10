const express = require('express')
const mqtt = require('mqtt')

const app = express()
const client  = mqtt.connect('mqtt://iot.eclipse.org')
const topic = 'wep2018'

app.get('/mqtt_ping', (req, res) => {
  client.publish(topic, '/mqtt_ping GET request received!')
  res.sendStatus(200)
})

client.on('connect', function () {
  client.subscribe(topic)
  client.publish(topic, `Hello MQTT at connect ... \n messages will arrive at topic ${topic} \n run curl localhost:3000/mqtt_ping in another terminal to test`)
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))