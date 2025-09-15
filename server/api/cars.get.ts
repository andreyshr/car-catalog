import carsJson from '../data/cars.json';
import { fromDto } from '../mappers/car';

export default defineEventHandler(() => {
  try {
    return carsJson.map(fromDto);
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load cars data',
      data: err,
    });
  }
});
