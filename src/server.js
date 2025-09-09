import express from 'express';
import path from 'path';
import routes from './routes/index.js';
import { fileURLToPath } from 'url';

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes/index.js file
app.use('/', routes);

app.post('/submit-contact', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);

    // Send response message, then redirect after 4 seconds
    res.send(`
        <html>
            <head>
                <meta http-equiv="refresh" content="4;url=/" />
                <title>Thank You</title>
                <style>
                    body { 
                        background: #f0efeb; 
                        color: #3b6666; 
                        font-family: 'Montserrat', sans-serif; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                    }
                    .message {
                        background: #fff;
                        border: 2px solid #3b6666;
                        border-radius: 1rem;
                        padding: 2rem 3rem;
                        box-shadow: 0 2px 12px rgba(74, 106, 106, 0.07);
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="message">
                    <h2>Form submission received. Thank you!</h2>
                    <p>You will be redirected to the homepage in 4 seconds.</p>
                </div>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});