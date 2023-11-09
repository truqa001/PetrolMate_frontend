import React, { ReactElement } from 'react';
import { Pressable, Text } from 'react-native';

export function Button({
  className,
  textColor,
  title,
  onPress,
}: {
  className?: string;
  textColor?: string;
  title: string;
  onPress: () => void;
}): ReactElement {
  return (
    <Pressable
      className={`p-2 rounded-md bg-white items-center ${className}`}
      onPress={onPress}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </Pressable>
  );
}
