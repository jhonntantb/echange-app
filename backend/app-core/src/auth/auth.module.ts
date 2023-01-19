import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { HashService } from "src/user/hash.service";
import { User, UserSchema } from "src/user/schemas/user.schema";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { SessionSerializer } from "./strategy/session.serializer";

@Module({
    imports: [
        UserModule,
        PassportModule.register({session: true}),
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }])
    ],
    providers: [
        AuthService,
        LocalStrategy,
        SessionSerializer,
        HashService,
        UserService
    ]
})

export class AuthModule{};