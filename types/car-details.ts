import type { Nullable } from './utils';

export interface CarTrimsDto {
  Trims: CarDetailsDto[];
}

export interface CarDetailsDto {
  model_id: Nullable<string>;
  model_make_id: Nullable<string>;
  model_name: Nullable<string>;
  model_trim: Nullable<string>;
  model_year: Nullable<string>;
  model_body: Nullable<string>;
  model_engine_position: Nullable<string>;
  model_engine_cc: Nullable<string>;
  model_engine_cyl: Nullable<string>;
  model_engine_type: Nullable<string>;
  model_engine_valves_per_cyl: Nullable<string>;
  model_engine_power_ps: Nullable<string>;
  model_engine_power_rpm: Nullable<string>;
  model_engine_torque_nm: Nullable<string>;
  model_engine_torque_rpm: Nullable<string>;
  model_engine_bore_mm: Nullable<string>;
  model_engine_stroke_mm: Nullable<string>;
  model_engine_compression: Nullable<string>;
  model_engine_fuel: Nullable<string>;
  model_top_speed_kph: Nullable<string>;
  model_0_to_100_kph: Nullable<string>;
  model_drive: Nullable<string>;
  model_transmission_type: Nullable<string>;
  model_seats: Nullable<string>;
  model_doors: Nullable<string>;
  model_weight_kg: Nullable<string>;
  model_length_mm: Nullable<string>;
  model_width_mm: Nullable<string>;
  model_height_mm: Nullable<string>;
  model_wheelbase_mm: Nullable<string>;
  model_lkm_hwy: Nullable<string>;
  model_lkm_mixed: Nullable<string>;
  model_lkm_city: Nullable<string>;
  model_fuel_cap_l: Nullable<string>;
  model_sold_in_us: Nullable<string>;
  model_co2: Nullable<string>;
  model_make_display: Nullable<string>;
  make_display: Nullable<string>;
  make_country: Nullable<string>;
}

export interface CarDetails {
  modelTrim: Nullable<string>;
  modelBody: Nullable<string>;
  modelEnginePosition: Nullable<string>;
  modelEngineCc: Nullable<string>;
  modelEngineCyl: Nullable<string>;
  modelEngineType: Nullable<string>;
  modelEnginePowerPs: Nullable<string>;
  modelEngineTorqueNm: Nullable<string>;
  modelEngineFuel: Nullable<string>;
  modelDrive: Nullable<string>;
  modelTransmission_type: Nullable<string>;
  modelSeats: Nullable<string>;
  modelDoors: Nullable<string>;
  modelWeightKg: Nullable<string>;
}
