import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { BookRoutes } from './bookRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
// app.use(cors());
app.get("/health", function (req, res) {
	res.sendStatus(200);
})
// Initialize the book routes
app.use('/api/books', BookRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  