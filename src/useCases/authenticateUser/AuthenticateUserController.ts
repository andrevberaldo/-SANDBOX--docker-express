import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const {username, password} = request.body;

        const authenticateUserUseCase = new AuthenticateUserUseCase();

        try {
            const token = await authenticateUserUseCase.execute({
                username,
                password
            })
    
            return response.json(token)
        } catch (error) {
            response.status(500).json({
                status: 500,
                message: error.message
            })
        }

        
    }
}

export { AuthenticateUserController }