import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param, ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api is broken', HttpStatus.FORBIDDEN);
    return 'all cat';
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return `cat by id ${id}`;
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updateCatPartial() {
    return 'update cat partial';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete cat';
  }
}
