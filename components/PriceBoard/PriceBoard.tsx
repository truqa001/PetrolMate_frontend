import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { MaxPrice } from './MaxPrice';
import { MinPrice } from './MinPrice';

export function PriceBoard({
  minPrice,
  maxPrice,
}: {
  minPrice: string;
  maxPrice: string;
}): ReactElement {
  return (
    <View className="flex flex-row my-4">
      <MinPrice minPrice={minPrice} />
      <MaxPrice maxPrice={maxPrice} />
    </View>
  );
}
