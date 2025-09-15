import { getQuery } from 'h3';
import type { CarTrimsDto } from '../../types/car-details';
import { fromDto } from '../mappers/car-details';

export default defineEventHandler(async (event) => {
  const { make, year, model } = getQuery(event);

  if (!make || !model || !year) {
    throw createError({
      statusCode: 400,
      statusMessage:
        'Failed to fetch car details. Make, model and year are required',
    });
  }

  try {
    const baseUrl = (useRuntimeConfig().public.carQueryBase ??
      'http://www.carqueryapi.com/api/0.3/') as string;
    const result = await $fetch<CarTrimsDto>(baseUrl, {
      params: {
        cmd: 'getTrims',
        make,
        model,
        year,
      },
    });
    return result.Trims.map(fromDto);
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch car details',
      data: err,
    });
  }
});
