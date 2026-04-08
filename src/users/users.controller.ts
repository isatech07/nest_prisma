import { Controller, ParseIntPipe, Get, Post, Put, Delete, Param, Body  } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService) {}

    @Get(':id')
        findOneUser(@Param('id', ParseIntPipe) id: number) {
            return this.userService.findOne(id);
        }
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }
}
