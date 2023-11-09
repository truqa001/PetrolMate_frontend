import React, { ReactElement } from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { Button } from '../Button';

export function StationsListItem({
  station,
}: {
  station: Station;
}): ReactElement {
  const { stationName, logo, price, address, distance } = station;
  return (
    <View
      className="flex flex-row rounded-md shadow-md bg-white"
      style={{ margin: 3 }}
    >
      <ItemLeft logo={logo} price={price} />
      <ItemMid stationName={stationName} address={address} />
      <ItemRight address={address} distance={distance} />
    </View>
  );
}

function ItemLeft({
  logo,
  price,
}: {
  logo: string;
  price: string;
}): ReactElement {
  return (
    <View className="flex items-center basis-1/6 p-1 pt-3 bg-green-300 ">
      <Image
        source={{
          uri: logo,
        }}
        style={{ width: 25, height: 25 }}
      />
      <Text className="text-lg font-bold">{price}</Text>
    </View>
  );
}

function ItemMid({
  stationName,
  address,
}: {
  stationName: string;
  address: string;
}): ReactElement {
  return (
    <View className="basis-3/6 p-1 pl-1">
      <Text className="text-md font-bold">{stationName}</Text>
      <Text>{address}</Text>
    </View>
  );
}

function ItemRight({
  address,
  distance,
}: {
  address: string;
  distance: number;
}): ReactElement {
  const openGoogleMaps = (adrs: string) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      adrs,
    )}`;

    Linking.openURL(mapUrl).catch((error) =>
      console.error('An error occurred', error),
    );
  };

  return (
    <View className="basis-2/ p-1">
      {distance && <Text className="pt-2">{distance} km away</Text>}
      <Button
        className="items-start p-0 pt-1"
        title="Navigate >"
        onPress={() => openGoogleMaps(address)}
        textColor="blue"
      />
    </View>
  );
}
