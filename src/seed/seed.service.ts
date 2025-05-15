import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.data';
import { CARS_SEED } from './data/cars.data';

@Injectable()
export class SeedService {

    constructor(
        private readonly carsService: CarsService,
        private readonly brandsService: BrandsService,
    ) {}

    executeSeed() {
        this.brandsService.fillBrands(BRANDS_SEED);
        this.carsService.fillCars(CARS_SEED);
        return "Seed executed";
    }
}
