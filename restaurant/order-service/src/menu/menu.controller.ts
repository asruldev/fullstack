import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Post()
  create(@Body() menuData: { name: string; price: number }): Promise<Menu> {
    return this.menuService.create(menuData);
  }
}
