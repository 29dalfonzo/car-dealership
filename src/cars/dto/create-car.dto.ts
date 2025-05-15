import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto {
  @IsString({ message: "The brand must be a string" })
  @IsNotEmpty({ message: "The brand is required" })
  readonly brand: string;

  @IsString({ message: "The model must be a string" })
  readonly model: string;
}
