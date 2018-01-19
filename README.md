# movie-bot
movie bot code sample

This is the code repo for the movie-bot exercise in the [Chatbot Workshop](https://github.com/yipcma/bot-wep2018). The code is adapted and modified from [this wonderful blog post](https://recast.ai/blog/nodejs-chatbot-movie-bot/).

Feel free to follow along with the [course deck](https://docs.google.com/presentation/d/1n9jwU8oQyVJcvQnGp-jSBNbR8OsSyaVqRbAW6s42oy4/edit?usp=sharing).

## Prereqs
- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org/en/)
- [ngrok](https://ngrok.com/)

## Beginner JS resources

My favorite beginner js book: [Eloquent Javascript (in-browser coding exercises)](http://eloquentjavascript.net/)

Interactive tutorial: [Codecademy (Free, no need to go pro)](https://www.codecademy.com/learn/learn-javascript)

## Install
`git clone https://github.com/yipcma/movie-bot.git`

`cd movie-bot`

`npm install`

## Config
- obtain apikey from [themoviedb](https://www.themoviedb.org)
- create an account, log in, go to settings, then go to API on the left panel
- edit `config.js`

## Run
`npm start`

## Test MQTT
`npm mqtt`  
In another terminal  
`curl localhost:3000/mqtt_ping`

## Setup Recast.ai

Follow the [original blog post](https://recast.ai/blog/nodejs-chatbot-movie-bot/).
