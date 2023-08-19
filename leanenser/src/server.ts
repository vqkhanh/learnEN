// src/server.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello khanh from the API!' });
  });