import React, { ReactElement } from 'react';
import { ScrollView, Text } from 'react-native';
import { StationsListItem } from './StationsListItem';

export function StationsList({
  title,
  stations,
}: {
  title: string;
  stations: Station[];
}): ReactElement {
  return (
    <ScrollView className="">
      <Text className="heer font-bold text-base">{title}</Text>
      {stations.map((station, index) => (
        <StationsListItem key={`station-${index}`} station={station} />
      ))}
    </ScrollView>
  );
}
