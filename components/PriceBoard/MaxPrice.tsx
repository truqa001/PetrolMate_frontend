import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';

export function MaxPrice({ maxPrice }: { maxPrice: string }): ReactElement {
  return (
    <View className="p-2 basis-1/2">
      <View className="p-2 bg-red-200 rounded-md h-24">
        <Text className="text-center">Max Price</Text>
        <Text className="text-center text-xl font-bold text-red-500">
          {maxPrice}
        </Text>
      </View>
    </View>
  );
}
