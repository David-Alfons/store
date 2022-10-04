import express, { Application, Request, Response } from 'express';

const PORT = 3000;
// create instance from server
const app: Application = express();

//add route for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
  });
});
// start express server
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

export default app;
