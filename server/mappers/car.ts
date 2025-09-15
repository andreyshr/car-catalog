import type { CarBase, CarBaseDto } from '~~/types/car';

export function fromDto(car: CarBaseDto): CarBase {
  return car;
}
