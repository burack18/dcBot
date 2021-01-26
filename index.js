const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.TOKEN);
 
client.on('ready', ready=>{
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message',msg=>{
    if(msg.content === 'ping'){
       msg.channel.send('pongt');
       msg.channel.send(msg.author.username);
    }
})

 
