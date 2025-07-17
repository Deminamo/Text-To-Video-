# Text-to-Video Backend

This is a Node.js backend that accepts a text prompt and returns a video URL generated using the D-ID API.

## How to Deploy (Render.com)
1. Push this repo to GitHub
2. Go to https://render.com and create a new Web Service
3. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Add environment variable:
   - `DID_API_KEY` = your D-ID API key
