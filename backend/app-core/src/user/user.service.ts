import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { HashService } from './hash.service';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private hashService: HashService
  ){}

  async getUserByEmail(email: string){
    return this.userModel.findOne({ email }).exec();
  }
  async register(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    const user = await this.getUserByEmail(createUserDto.email);
    if(user){
      throw new BadRequestException();
    }

    createdUser.password = await this.hashService.hashPassword(createUserDto.password);
    return createdUser.save();
  }
}
