export interface CarBaseDto {
  id: string;
  make: string;
  model: string;
  year: number;
  img?: string;
}

export type CarBase = CarBaseDto;
