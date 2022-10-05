import express, { Application, Request, Response } from 'express';
import errorMiddleware from './middleware/error.middleware';

const PORT = 3000;
// create instance from server
const app: Application = express();

//add route for / path
app.get('/', (req: Request, res: Response) => {
  throw new Error ();
  res.json({
    message: 'Hello World',
  });
  
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Page not found!',
  });
});
app.use(errorMiddleware);
// start express server
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

export default app;
