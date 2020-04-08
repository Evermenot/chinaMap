import { Injectable } from '@angular/core';
import { IGeoMap } from './types';

@Injectable()
export class MapDataService {

  private countriesData =
      import('./chinaMapData/geometryCouties') as unknown as Promise<{ default: {[p: string]: IGeoMap} }>;

  private proviceData =
      import('./chinaMapData/geometryProvince') as unknown as Promise<{ default: {[p: string]: IGeoMap} }>;

  public getContriesMapData(id: number | string): Promise<IGeoMap> {
    return this.countriesData.then((m) => {
      return m.default[id];
    });
  }

  public getProvinceMapData(id: number | string): Promise<IGeoMap> {
    return this.proviceData.then((m) => {
      return m.default[id];
    });
  }
}
