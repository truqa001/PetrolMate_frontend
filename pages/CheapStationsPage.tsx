import React, { ReactElement, useEffect, useState } from 'react';
import { View } from 'react-native';
import { PriceBoard, StationsList } from '../components';
import { child, get } from 'firebase/database';
import { dbRef } from '../firebaseConfig';
import * as geolib from 'geolib';

export function CheapStationsPage({
  userLocation,
}: {
  userLocation: { longitude: number; latitude: number };
}): ReactElement {
  const [data, setData] = useState<BackendResponse | null>();
  useEffect(() => {
    // Reference to the database location you want to read from
    get(child(dbRef, `/City/Adelaide/E10`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();

          const stationsWithDistance: Station[] = data.stations.map(
            (station: Station) => {
              const coordinates = station.coordinates;

              const distance =
                coordinates && userLocation
                  ? geolib.convertDistance(
                      geolib.getDistance(userLocation, coordinates, 1000),
                      'km',
                    )
                  : undefined;
              return {
                ...station,
                distance,
              };
            },
          );

          setData({
            ...data,
            stations: stationsWithDistance.filter(
              (station) => station.distance,
            ),
          });
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {data && (
        <>
          <PriceBoard
            minPrice={data?.minPrice || 'N/A'}
            maxPrice={data?.maxPrice || 'N/A'}
          />
          <StationsList
            title={'Cheap stations around'}
            stations={data.stations}
          />
        </>
      )}
    </View>
  );
}
