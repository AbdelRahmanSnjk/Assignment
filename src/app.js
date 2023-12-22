import express from 'express';
import { join, extname } from 'path';
import quoteRoutes from './routes/quoteRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/quotes', quoteRoutes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the root path to serve 'index.html'
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Ensure correct MIME type for JavaScript files
app.use((req, res, next) => {
  const ext = extname(req.path);
  if (ext === '.js') {
    res.type('text/javascript');
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app