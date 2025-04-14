import { IsString, IsDateString, IsInt, Min } from 'class-validator';

export class CreateEventDto {
  @IsString() title: string;
  @IsString() description: string;
  @IsDateString() date: string;
  @IsString() location: string;
  @IsInt() @Min(0) price: number;
  @IsInt() @Min(1) ticket_quota: number;
}
