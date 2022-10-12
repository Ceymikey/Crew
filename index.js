const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord  = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
 client.user.setActivity('Spooky', { type: 'PLAYING' })
})

client.on("messageCreate", message => {
  if(message.content === "!Twitter") {
    message.channel.send("https://twitter.com/Ceymikey")
  }
})

client.on("messageCreate", message => {
  if(message.content === "Ping") {
    message.channel.send("PONG!")
  }
})

client.on("messageCreate", message => {
  if(message.content === "!mickeymouse") {
    message.channel.send("POG")
  }
})


client.on("messageCreate", message => {
  if(message.content === "!") {
    message.channel.send("https://twitter.com/Ceymikey")
  }
})

client.login(process.env.token);