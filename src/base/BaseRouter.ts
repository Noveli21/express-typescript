import { IRouter, Request, Response, Router } from "express";
import IUserRouter from "../interfaces/UserInterface";

abstract class BaseRouter implements IUserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRouter;
