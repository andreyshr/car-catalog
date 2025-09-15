import { fromDto } from '../mappers/car';

export default defineEventHandler(async () => {
  try {
    const cars = await import('../data/cars.json');
    return cars.default.map(fromDto);
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load cars data',
      data: err,
    });
  }
});
