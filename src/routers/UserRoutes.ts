import UserController from "../controllers/UserController";
import BaseRouter from "../base/BaseRouter";
import { auth } from "../middleware/AuthMiddleware";

class UserRoutes extends BaseRouter {
  public routes(): void {
    // get metode

    /**
     * @openapi
     * /api/v1/user:
     *  get:
     *     tags:
     *     - User
     *     summary: get all users
     *     description: get all users
     *     responses:
     *       200:
     *         description: get all users success
     */

    this.router.get("/", auth, UserController.index);

    // post metode

    /**
     * @openapi
     * /api/v1/user:
     *  post:
     *     tags:
     *     - Todo
     *     summary: create a new user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/UpdateUser'
     *     responses:
     *      200:
     *        description: create a new user success
     */
    this.router.post("/", UserController.create);

    // get 1 data

    /**
     * @openapi
     * /api/v1/user/{id}:
     *  get:
     *     tags:
     *     - User
     *     summary: get user by ID
     *     description: get user by ID
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The id of the user
     *        required: true
     *     responses:
     *       200:
     *         description: get user by ID success
     */
    this.router.get("/:id", UserController.show);

    // update data

    /**
     * @openapi
     * /api/v1/user/{id}:
     *  put:
     *     tags:
     *     - User
     *     summary: edit username by ID
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The id of the user
     *        required: true
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *              $ref: '#/components/schemas/UpdateUser'
     *     responses:
     *      200:
     *        description: edit username success
     */
    this.router.put("/:id", UserController.update);

    // delete data

    /**
     * @openapi
     * /api/v1/user/{id}:
     *  delete:
     *     tags:
     *     - User
     *     summary: delete a user by ID
     *     description: delete a user by ID
     *     parameters:
     *      - name: id
     *        in: path
     *        description: The id of the user
     *        required: true
     *     responses:
     *       200:
     *         description: delete user by ID success
     */
    this.router.delete("/:id", UserController.delete);
  }

  /**
   * @openapi
   * components:
   *  schemas:
   *    UpdateUser:
   *      type: object
   *      required:
   *        - username
   *      properties:
   *        username:
   *          type: string
   *          default: user_400
   */
}

export default new UserRoutes().router;
