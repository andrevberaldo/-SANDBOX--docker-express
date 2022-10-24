import { compare } from "bcryptjs";
import { client } from "../../prima/client";
import { sign } from 'jsonwebtoken';


interface IRequest {
    username: string;
    password: string;
}


class AuthenticateUserUseCase {
    
    async execute({username, password}: IRequest){
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username
            }
        })

        if(!userAlreadyExists) {
            throw new Error("User/Password invalid");
        }

        const isPasswordCorrect = await compare(password, userAlreadyExists.password);

        if(!isPasswordCorrect){
            throw new Error("User or Password invalid");
        }

        const token = sign({}, "sandbox-refresh-token", {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });            

        return token;
    }
}

export { AuthenticateUserUseCase }