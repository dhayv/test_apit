import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Post('user')
    create(): string {
        return "User Added"
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        return `This action returns a #${params.id}`
    }
}

