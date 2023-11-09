import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

export function MinPrice({ minPrice }: { minPrice: string }): ReactElement {
  return (
    <View className="p-2 basis-1/2">
      <View className="p-2 bg-green-200 rounded-md h-24">
        <Text className="text-center">Min Price</Text>
        <Text className="text-center text-xl font-bold text-green-500">
          {minPrice}
        </Text>
      </View>
    </View>
  );
}
