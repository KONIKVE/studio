'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const farmLocation = { lat: 34.052235, lng: -118.243683 }; // Placeholder: Downtown Los Angeles

export function FarmMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-lg bg-muted p-4 text-center text-muted-foreground">
        <p className="font-semibold">Could not load map.</p>
        <p className="text-sm">Google Maps API key is missing. Please ask the site administrator to configure it.</p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={farmLocation}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="feathered_acres_map"
        >
          <Marker position={farmLocation} title="Feathered Acres" />
        </Map>
      </APIProvider>
    </div>
  );
}
