import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './dto/index';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';

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
  @UseGuards( AuthGuard() )
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    
    // @RawHeaders() rawHeaders: string[],
    // @Headers() headers: IncomingHttpHeaders,
  ) {


  //   return {
  //     ok: true,
  //     message: 'Hola Mundo Private',
  //     user,
  //     userEmail,
  //     // rawHeaders,
  //     // headers
  //   // }
  }


  // // @SetMetadata('roles', ['admin','super-user'])

  // @Get('private2')
  // @RoleProtected( ValidRoles.superUser, ValidRoles.admin )
  // @UseGuards( AuthGuard(), UserRoleGuard )
  // privateRoute2(
  //   @GetUser() user: User
  // ) {

  //   return {
  //     ok: true,
  //     user
  //   }
  // }


  // @Get('private3')
  // @Auth( ValidRoles.admin )
  // privateRoute3(
  //   @GetUser() user: User
  // ) {

  //   return {
  //     ok: true,
  //     user
  //   }
  // }



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
