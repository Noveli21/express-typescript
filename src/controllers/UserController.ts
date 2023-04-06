import { Request, Response } from "express";
import IController from "../interfaces/ControllerInterface";

let data: any[] = [
  { id: 1, name: "Saya" },
  { id: 2, name: "Sata" },
  { id: 3, name: "Sada" },
  { id: 4, name: "Sapa" },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    console.log("ini dalah index user");
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send("Create Succes");
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);
    return res.send(person);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    person.name = name;

    return res.send("Update Succes");
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let people = data.filter((item) => item.id != id);
    return res.send(people);
  }
}

export default new UserController();
