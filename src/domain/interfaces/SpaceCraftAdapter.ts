import { Spacecraft } from "../model/Spacecraft";

export interface SpaceCraftAdapter {
  load(): Promise<SpaceCraftResult>;
}

export interface SpaceCraftResult {
  page: Pagination;
  spacecrafts: Array<Spacecraft>;
}

export interface Pagination {
  pageNumber: number;
  pageSize: number;
}
