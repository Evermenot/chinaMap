export interface IGeoMap {
  type: string;
  cp?: any[];
  size?: string;
  features: IFeatureItm[];
}

interface IFeatureItm {
  type: string;
  properties: IProperties;
}

interface IProperties {
  id: string;
  name: string;
  cp: any[];
  childNum: number;
  geometry: {
    type: string;
    coordinates: any[]
  };
}
