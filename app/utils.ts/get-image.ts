import type { CarBase } from '~~/types/car';
import { IMAGE_STUB } from './constants';

export function getCarImage(car: CarBase) {
  if (car.img) return car.img;
  else return IMAGE_STUB;
}
