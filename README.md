# 🔗 URL Shortener  

A simple **URL Shortener backend** built with **Node.js, Express, and MongoDB**.  
This project allows users to shorten long URLs into compact, shareable links and redirect them easily.  

---

## 🚀 Features
- Shorten long URLs into short links  
- Redirect to the original URL when short link is visited  
- Store URLs in MongoDB  
- REST API endpoints for integration  

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose

- ## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash(terminal)
   git clone https://github.com/ayesha-saaed/CodeAlpha_URLShortener.git
   cd CodeAlpha_URLShortener
   
 2. Install dependencies:
   npm install

3. Create a .env file (or use main.env) and add:
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000

4.Run the server:
node index.js
Server will start at http://localhost:3000

📌 API Endpoints
1️⃣ Shorten a URL
POST /shorten
Request Body:

json

{
  "longUrl": "https://www.example.com/very/long/url"
}
Response:

json

{
  "shortUrl": "http://localhost:5000/abc123"
}
2️⃣ Redirect to Original URL

GET http://localhost:3000/abc123
Redirects to Google.

🖥️ Frontend Usage

Open http://localhost:3000/ in your browser.

Enter a long URL in the form and click Shorten.

You’ll get a clickable short link. 
👩‍💻 Author

Developed by "Ayesha Saeed"
