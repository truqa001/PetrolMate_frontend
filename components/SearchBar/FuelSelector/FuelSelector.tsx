import React, { useState } from 'react';
import { SafeAreaView, Picker } from 'react-native';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <SafeAreaView>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
    </SafeAreaView>
  );
};

export default MyComponent;
