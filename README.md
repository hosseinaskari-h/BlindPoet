The Blind Poet: A Machine's Quest for Vision
Project Overview

The Blind Poet is an innovative project that combines machine learning and artificial intelligence to transform visual data into poetic expressions.
At its core, this application employs object detection to "see" the world through a camera's lens. However, like a poet blind to the visual spectrum, it relies on the interpretation and imagination of machines—and your guidance—to transform these visuals into verses.
This project employs object detection technology to interpret visual scenes, which are then converted into poetry through the power of AI, specifically utilizing OpenAI's GPT models.

Technical Framework
Object Detection: Implemented using ml5.js with the COCO-SSD model, enabling real-time detection of objects within the browser.
Poetry Generation: Powered by OpenAI's GPT, which crafts poetic compositions based on the objects identified by the detection model.
Communication Protocol: Uses Socket.IO for dynamic communication between the client interface and the server, facilitating a seamless interactive experience.
Server Side: Built on Node.js, this server orchestrates the interactions between the client-side detections and the OpenAI API for poetry generation.
Client Interface: Designed with p5.js, providing an interactive and user-friendly interface for live video capture and display of the generated poetry.
Installation Guide
Pre-requisites
Node.js and npm must be installed on your machine.
An active OpenAI API key is required and can be obtained by registering on the OpenAI platform.

Setup
1- Clone the Project Repository
```
git clone <https://github.com/stuxneo/BlindPoet>
cd <BlindPoet>
```
2- Install Dependencies
```
npm install
```

3-Set Up Environment Variables
Create a .env file in the project's root directory. Add your OpenAI API key here:
```
OPENAI_API_KEY=<your_api_key>
```
4-Launch the Server
```
node app.js
```
Access the application through http://localhost:3000 in your web browser.

How to Use
Initiate Object Detection: Click on "Start Detection" to activate object detection through your webcam.
Generate Poetry: After capturing the desired scene, click "Stop Detection." The application processes the detected objects and requests a poem inspired by these objects from the GPT model.
View and Share the Poem: The generated poem is displayed on the interface. This unique blend of technology and creativity offers a new avenue for artistic expression.
Contribution Guidelines
We welcome contributions from the community, including feature enhancements, bug fixes, or documentation improvements. Please fork the repository and submit a pull request with your changes for review.

Licensing
This project is released under the MIT License. See the LICENSE file in the project repository for full details.
