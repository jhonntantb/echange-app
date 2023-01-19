import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
    async canActivate(context: ExecutionContext){
            console.log("entre al local guard")
        const result = (await super.canActivate(context)) as boolean ;
        console.log("esta es el results", result)
        const request = context.switchToHttp().getRequest();
        
        await super.logIn(request);
        
        return result;
      
    }
}