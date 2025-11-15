import { userService } from './service';
import { UserControllerContract, AccessTokenPayload } from './types';
import { ENV } from '../config/env';
import { TokenExpiredError, verify } from 'jsonwebtoken'


const userController: UserControllerContract = {
    async login(req, res) {
        try {
            let body = req.body

            if (!body) { res.status(400).json({ message: 'body is required' }); return; }

            const token = await userService.login(body)
            res.status(200).json({token})
        } catch(err) {
            console.error(err);
        }
    },
    async register(req, res) {
        try {
            let body = req.body

            if (!body) { res.status(400).json({ message: 'body is required' }); return; }

            const token = await userService.login(body)
            res.status(200).json({token})
        } catch(err) {
            console.error(err);
        }
    },
    async me(req, res) {
        try {
            const Authorization = req.headers.authorization

            if (!Authorization) { res.status(401).json({message: "authorization is required"}); return; }

            const [type, token] = Authorization.split(" ")

            if (type != "bearer" || !token) { res.status(401).json({message: "wrong format autharization"}); return; }

            const payload = verify(token, ENV.JWT_ACCESS_SECRET_KEY)
            if (typeof payload == "string") { res.status(401).json({message: "wrong format"}); return; }
            const user = await userService.me(payload.id);

            if (!user) { res.status(404).json({message: "User not found"}); return; }
            
            res.status(200).json(user)
        } catch(err) {
            if (err instanceof TokenExpiredError) {
                res.status(401).json({message: "You need to reload your token. It expired"})
                return;
            } else console.error(err);
        }
    }
};

export default userController;