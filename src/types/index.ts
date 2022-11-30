export type Maptype =
  | 'dreamy'
  | 'dreamy-gold'
  | 'neshan'
  | 'standard-day'
  | 'standard-night'
  | 'osm-bright'    ;

interface Options {
  key?: string;
  maptype?: Maptype;
  poi?: boolean;
  traffic?: boolean;
  center?: [number, number];
  zoom?: number;
  onPoiLayerSwitched?: () => any;
  onTrafficLayerSwitched?: () => any;
}

export interface NeshanMapProps {
  style?: object;
  onInit?: (L: any, myMap: any) => any;
  options?: Options;
}
