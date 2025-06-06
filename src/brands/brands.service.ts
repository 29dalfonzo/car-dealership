import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { UpdateBrandDto } from "./dto/update-brand.dto";
import { Brand } from "./entities/brand.entity";
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name,
      createdAt: new Date(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) {
      throw new NotFoundException("Brand not found");
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const { name } = updateBrandDto;
    const brand = this.findOne(id);
    this.brands = this.brands.map((brand) =>
      brand.id === id ? { ...brand, name, updatedAt: new Date() } : brand,
    );  
    return brand;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return {
      message: "Brand deleted successfully",
    };
  }

  fillBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
