import * as L from 'leaflet';

const svg = (color: string = '#555555'): string => {
  return `<svg style="width:24px; height:24px" viewBox="0 0 24 24">
            <path fill="${color}" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,
                                    11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>`;
};

export function markerIcon(color?: string): L.DivIcon {
  return L.divIcon({
    className: '',
    iconAnchor: [12, 21],
    html: svg(color)
  });
}
