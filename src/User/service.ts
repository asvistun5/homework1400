import { UserServiceContract } from "./types";
import { userRepository } from "./repository";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";
import bcrypt from "bcryptjs";
import { StringValue } from 'ms';


export const userService: UserServiceContract = {
    async register (credentials){
        const user = await userRepository.findByEmail(credentials.email)
        if (user) throw new Error("USER_EXISTS");
        if (!credentials.firstName) throw new Error("NO_FIRSTNAME");

        const hashPwd = await bcrypt.hash(credentials.password, 10);

        const newUser = await userRepository.create({
            ...credentials,
            firstName: credentials.firstName,
            password: hashPwd
        });

        const token = sign({id: newUser.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token;
    },
    async login(credentials) {
        const user = await userRepository.findByEmail(credentials.email)
        if (!user) throw new Error("NOT_FOUND");

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if(!isMatch) throw new Error("WRONG_CREDENTIALS");


        const token = sign({id: user.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token;
    },
    async me(id){
        const user = await userRepository.findByIdWithoutPassword(+id)
        return user;
    }
}