import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTaskDto {

  @IsString({ message: 'Title must be a string' })
  @MinLength(5, { message: 'Title must be at least 5 characters long' })
  @IsNotEmpty({ message: 'Title is required' })
  readonly title: string;

  @IsString({ message: 'Description must be a string' })
  @MinLength(10, { message: 'Description must be at least 10 characters long' })
  @IsNotEmpty({ message: 'Description cannot be empty' })
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;

}