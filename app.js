const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const axios = require('axios');

app.use(express.static("public"));

server.listen(3000, () => {
  console.log("listening on *:3000");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("requestPoem", async (names) => {
    const prompt = `Write a short poem Using the following words: ${names.join(', ')}.`;
    
    try {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.5,
      }, {
        headers: {
          'Authorization': `Bearer PUT API CODE HERE`
        }
      });

      const poem = response.data.choices[0].text.trim();
      socket.emit('poem', poem);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      socket.emit('error', 'Failed to generate poem');
    }
  });
});