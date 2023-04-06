import { Request, Response } from "express";
import IController from "../interfaces/ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getAll();

    return res.send({
      data: todo,
      message: "Transaction Success",
    });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.send({
      data: todo,
      message: "Todo Created",
    });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.send({
      data: todo,
      message: "Transaction Success",
    });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    return res.send({
      data: todo,
      message: "Todo Update Success",
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.delete();

    return res.send({
      data: todo,
      message: "Todo Delete Success",
    });
  };
}

export default new TodoController();
