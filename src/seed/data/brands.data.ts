import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Toyota",
        createdAt: new Date(),
    },
    {
        id: uuid(),
        name: "Honda",
        createdAt: new Date(),
    },
];

