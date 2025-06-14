import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) throw new NotFoundException('Usuário não encontrado');
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const updated = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
        if (!updated) throw new NotFoundException('Usuário não encontrado');
        return updated;
    }

    async remove(id: string): Promise<User> {
        const deleted = await this.userModel.findByIdAndDelete(id);
        if (!deleted) throw new NotFoundException('Usuário não encontrado');
        return deleted;
    }
}
