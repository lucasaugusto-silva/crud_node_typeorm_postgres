import { Router } from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { DeleteUsersController } from "./controllers/DeleteUsersControllers";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { UpdateUsersController } from "./controllers/UpdateUsersController";

const routes = Router();

routes.post("/users", new CreateUsersController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users:id", new DeleteUsersController().handle);
routes.put("/users:id", new UpdateUsersController().handle);

export { routes }