import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coffee } from './entities/coffee.entity';

@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @ApiOperation({ summary: 'Create a coffee' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: Coffee,
  })
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeeService.create(createCoffeeDto);
  }

  @ApiOperation({ summary: 'Get all coffee' })
  @ApiResponse({
    status: 200,
    description: 'Get all coffee',
    type: Coffee,
  })
  @Get()
  findAll(): Promise<Coffee[]> {
    return this.coffeeService.findAll();
  }

  @ApiOperation({ summary: 'Get a coffee by id' })
  @ApiResponse({
    status: 200,
    description: 'Get a coffee by id',
    type: Coffee,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Coffee> {
    return this.coffeeService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a coffee by id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: Coffee,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @ApiOperation({ summary: 'Delete a coffee by id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
    type: Boolean,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.coffeeService.remove(id);
  }
}
