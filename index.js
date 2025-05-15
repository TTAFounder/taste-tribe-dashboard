import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine and static folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the dashboard route
import dashboardRouter from './routes/dashboardRoute.js';
app.use('/dashboard', dashboardRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Dashboard running at http://localhost:${PORT}/dashboard`);
});

