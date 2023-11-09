import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ref, onValue, getDatabase, child, get } from 'firebase/database';
import { CheapStationsPage } from './pages/CheapStationsPage';
import { NativeWindStyleSheet } from 'nativewind';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [userLocation, setUserLocation] = useState<{
    longitude: number;
    latitude: number;
  }>();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      const currentLocation = {
        latitude: coords.latitude,
        longitude: coords.longitude,
      };

      setUserLocation(currentLocation);
      console.log('currentLocation', currentLocation);
    })();
  }, []);

  return (
    <SafeAreaView>
      <View className="p-2">
        {userLocation && <CheapStationsPage userLocation={userLocation} />}
      </View>
    </SafeAreaView>
  );
}

NativeWindStyleSheet.setOutput({
  default: 'native',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
