import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddressTypes } from '../enums/AddressTypes';
@Entity({ name: 'addresses' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  street: string;
  city: string;
  country: string;
  postalCode: number;
  type: AddressTypes;
}
