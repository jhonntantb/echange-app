import { Injectable } from "@nestjs/common";
import { HashService } from "src/user/hash.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private hashService: HashService
    ){}

    async validateUser(email: string, password: string){
        const user = await this.userService.getUserByEmail(email);
        if(user){
            const match = await this.hashService.comparePassword(password, user.password);
            if(match) return user;
        }
        return null;
    }
}