import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface LocationMapProps {
  form: UseFormReturn<any>;
}

const defaultCenter = {
  lat: -7.3372129,
  lng: 110.499375,
};

export const LocationMap = ({ form }: LocationMapProps) => {
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  return (
    <div className="h-[300px] w-full">
      <LoadScript googleMapsApiKey="AIzaSyDCM0gMyC9oVbrpMTRyUvC06Iz79BUKrkw">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={defaultCenter}
          zoom={14}
        >
          <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={(e) => {
              if (e.latLng) {
                const newPos = {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                };
                setMarkerPosition(newPos);
                form.setValue("location", `${newPos.lat},${newPos.lng}`);
              }
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};