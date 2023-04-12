# Ghosted 👻
Welcome to Ghosted! Have you ever wondered what kind of texter you are? This application goes through your iMessage history and provides an entire recap of your relationships, favourite words & emojis, group chats, and texting history. Rediscover relationships... or break them. This is open source for your privacy. 

## Features:
* iMessage Wrapped: Includes
  * Top sent word
  * Top sent emoji
  * Top contact
  * Funniest message
  * Favourite Word
  * Total sent and received texts
* Your texting activity
* Sentiment analysis
* Messages filtered by time, person, date, group chats, etc.

## Installation and Setup:
These instructions will get you a copy of the project up and running on your local machine. As of now, this is the only way for you to be able to access this application as a way to ensure personal privacy. 

### Prerequisites
Clone this repository. You will need ```node``` and ```npm``` installed on your local machine. Once these are installed, follow these steps to get the project running: 

Setup: 
In Macbook Finder, locate the ```chat.db``` file. This database is easy to find, and is located under ```~/Library/Messages/chat.db```. Make sure you copy this file and paste the copy onto your Desktop. Do not remove chat.db file from its original location. This is important as the application will look for this file on your Desktop when you run the program. 

Next, in Macbook Finder, locate ```AddressBook-v22.abcddb```. This database will be located under ```~/Library/Application Support/AddressBook/Sources``` and locate the version with the largest size. Make sure you copy this file and paste the copy onto your Desktop. Do not remove this file from its original location. The application will look for this file on your Desktop when you run the program to access your contacts list. 

Installation:
```npm install`` in the terminal in the root folder. Then, cd into server ```cd server``` and run ```npm install``` in the terminal.

Open a new terminal window and cd into client ```cd client```. Run ```npm install```. 

To Start Application: 
1. Start Backend: cd into server and run ```node server.js``` to start the backend of the application. 
2. Start Frontend: While the backend is running, in a new terminal window, cd into client and run ```npm start```. 
