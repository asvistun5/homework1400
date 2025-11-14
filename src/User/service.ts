import { UserServiceContract } from "./types";
import { userRepository } from "./repository";
import { sign } from "jsonwebtoken";
import { ENV } from "../config/env";
import { StringValue } from 'ms';
import { userRepository } from './repository';


export const userService: UserServiceContract = {
    async register (credentials){
        const user = await UserRepository.findByEmail(credentials.email)

        if (user){
            throw new Error("USER_EXISTS")
        }
        const newUser = await userRepository.create(credentials)
        const token = sign({id: newUser.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token
    },
    async login(credentials) {
        const user = await UserRepository.findByEmail(credentials.email)

        if (!user){
            throw new Error("NOT_FOUND")
        }
        const isMatch = credentials.password == user.password
        if(!isMatch){
            throw new Error("WRONG_CREDENTIALS")
        }
        const token = sign({id: user.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token
    },
    async me(id){
        const user = await UserRepository.findByIdWithoutPassword(+id)
        return user
    }
}