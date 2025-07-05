import { configDotenv } from "dotenv";
configDotenv();
import express, { Application, Request, Response } from "express";
const app: Application = express();

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/", (_: Request, res: Response): void => {
  console.log("I am in root path");
  console.log("this is me tabish");
  res.send("Hey this is just checking");
});

app.listen(PORT, (): void => {
  console.log("server started at port ", PORT);
});

const getUsers: () => Promise<string> = async (): Promise<string> => {
  return "tis is em";
};

getUsers();

function getData(): void {
  console.log("This si snormal function");
}

getData();
