import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {


    async handle(request: Request, respnse: Response){
        const {username, name, password} = request.body;
        
        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({
            username,
            name,
            password
        });

        return respnse.json(user);
    }
}

export { CreateUserController }