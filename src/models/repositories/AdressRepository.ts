/* eslint-disable prettier/prettier */
import { DataSource, Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Address } from '../entities/Address';
@Injectable()
export class AdressRpository extends Repository <Address>{
  constructor(private datasource: DataSource){
    super(Address, datasource.createEntityManager());
  }
  async createAdress(adress: Address): Promise<Address> {
    try {
      return this.save(adress);
    }catch (error){
      throw error;
    }
  }

  async getAllAdress():Promise <Array<Address>>{
    try{
      return this.find();
    }catch (error){
      throw error;
    }
  }
}