# Text Analyzer Tool

## Description
This project is a text analyzer tool that can read, write, update, and delete texts from a database. It can analyze text to generate the count of words, characters, sentences, paragraphs, and the longest word in each paragraph.

## Features
- Create a new text entry
- Get text statistics (word count, character count, sentence count, paragraph count)
- Get the longest word in each paragraph
- Update existing text entries
- Delete text entries
- Simple frontend interface
- Caching to prevent redundant calculations
- Throttling to limit API requests

## API Endpoints
- POST /api/texts - Create a new text
- GET /api/texts/:id/stats - Get text statistics
- GET /api/texts/:id/longest-words - Get longest words in paragraphs
- PUT /api/texts/:id - Update an existing text
- DELETE /api/texts/:id - Delete a text

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest
- Morgan
- Express-rate-limit
- Node-cache
- HTML, CSS, JavaScript

## Setup
1. Clone the repository:
``git clone https://github.com/Adnanrobi/text-analyzer.git``
``cd text-analyzer``
2. Install dependencies:``npm install``
3. Create a .env file in the root directory and add your MongoDB URI:``MONGODB_URI=mongodb+srv://test123:<password>@cluster0.3tydrr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0``
4. Run the server:``npm start``
5. Open your browser and navigate to http://localhost:5000 to view the frontend interface.

## Running Tests
Run the test suite with the following command: ``npm test``

## Bonus Features Implemented
- Throttling: Limited the number of requests to prevent abuse.
- Caching: Used node-cache to cache responses and reduce redundant calculations.
