import { Request, Response } from "express";

interface IController {
  // menampilkan data
  index(req: Request, res: Response): Response | Promise<Response>;

  // membuat data
  create(req: Request, res: Response): Response | Promise<Response>;

  // menampilkan 1 data
  show(req: Request, res: Response): Response | Promise<Response>;

  // update data
  update(req: Request, res: Response): Response | Promise<Response>;

  // delete data
  delete(req: Request, res: Response): Response | Promise<Response>;
}

export default IController;
