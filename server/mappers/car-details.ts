import type { CarDetails, CarDetailsDto } from '~~/types/car-details';

export function fromDto(dto: CarDetailsDto): CarDetails {
  return {
    modelTrim: dto.model_trim,
    modelBody: dto.model_body,
    modelEnginePosition: dto.model_engine_position,
    modelEngineCc: dto.model_engine_cc,
    modelEngineCyl: dto.model_engine_cyl,
    modelEngineType: dto.model_engine_type,
    modelEnginePowerPs: dto.model_engine_power_ps,
    modelEngineTorqueNm: dto.model_engine_torque_nm,
    modelEngineFuel: dto.model_engine_fuel,
    modelDrive: dto.model_drive,
    modelTransmission_type: dto.model_transmission_type,
    modelSeats: dto.model_seats,
    modelDoors: dto.model_doors,
    modelWeightKg: dto.model_weight_kg,
  };
}
