import { Controller, Get, Post, Body } from '@nestjs/common';
import { Address } from '../entities/Address';

import { AddressService } from '../services/AdressService';

@Controller()
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post('/create')
  async createAddress(@Body() address: Address): Promise<Address> {
    try {
      return await this.addressService.createAddress(address);
    } catch (error) {
      throw error;
    }
  }

  @Get('/lister')
  async getAllAddresses(): Promise<Address[]> {
    try {
      return await this.addressService.getAllAddresses();
    } catch (error) {
      throw error;
    }
  }
}
