import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString({ message: "The brand must be a string" })
  @IsNotEmpty({ message: "The brand is required" })
  @IsOptional()
  readonly brand: string;

  @IsString({ message: "The model must be a string" })
  @IsOptional()
  readonly model: string;
}
