import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CoffeeService {
  constructor(@InjectModel(Coffee.name) private CoffeeModel: Model<Coffee>) {}

  async create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return await this.CoffeeModel.create(createCoffeeDto);
  }

  async findAll(): Promise<Coffee[]> {
    return await this.CoffeeModel.find().exec();
  }

  async findOne(id: string): Promise<Coffee> {
    const coffee = await this.CoffeeModel.findById(id).exec();
    if (coffee) {
      return coffee;
    } else {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee> {
    return await this.CoffeeModel.findByIdAndUpdate(id, updateCoffeeDto).exec();
  }

  async remove(id: string): Promise<boolean> {
    const res = await this.CoffeeModel.deleteOne({ id }).exec();
    if (res.deletedCount === 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return res.acknowledged;
  }
}
