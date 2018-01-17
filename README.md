# movie-bot
movie bot code sample

This is the code repo for the movie-bot exercise in the [Chatbot Workshop](https://github.com/yipcma/bot-wep2018). The code is adapted and modified from [this wonderful blog post](https://recast.ai/blog/nodejs-chatbot-movie-bot/).

Feel free to follow along with the [course deck](https://docs.google.com/presentation/d/1n9jwU8oQyVJcvQnGp-jSBNbR8OsSyaVqRbAW6s42oy4/edit?usp=sharing).

## Prereqs
- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org/en/)
- [ngrok](https://ngrok.com/)

## Install
`git clone https://github.com/yipcma/movie-bot.git`

`cd movie-bot`

`npm install`

## Config
- obtain apikey from [omdb](https://www.omdbapi.com/apikey.aspx)
- edit `config.js`

## Run
`npm start`

## Test MQTT
`npm mqtt`  
In another terminal  
`curl localhost:3000/mqtt_ping`

## Setup Recast.ai

Follow the [original blog post](https://recast.ai/blog/nodejs-chatbot-movie-bot/).
