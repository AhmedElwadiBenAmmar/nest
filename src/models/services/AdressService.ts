/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Address } from '../entities/Address';
import { AdressRpository } from '../repositories/AdressRepository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AdressRpository) {}

  async createAddress(address: Address): Promise<Address> {
    try {
      return await this.addressRepository.createAdress(address);
    } catch (error) {
      throw error;
    }
  }

  async getAllAddresses(): Promise<Array<Address>> {
    try {
      return await this.addressRepository.getAllAdress();
    } catch (error) {
      throw error;
    }
  }
}
