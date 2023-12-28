import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/index';
import { User } from './entities/user.entity';
import { GetUser } from './decorators/index';
import { ValidRoles } from './interfaces';
import { Auth } from './decorators/auth.decorator';

// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

 @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto ) {
   return this.userService.login( loginUserDto );
  }
  
  // @Get('check-status')
  // @Auth()
  // checkAuthStatus(
  //   @GetUser() user: User
  // ) {
  //   return this.authService.checkAuthStatus( user );
  // }

  @Get('data')
  @Auth( ValidRoles.admin )
  privateRoute(
    @GetUser() user: User
  ) {
    
    return {
      ok: true,
      user
    }
  }



  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
