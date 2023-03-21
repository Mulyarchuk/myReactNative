
import React, { useState, useEffect, useCallback } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';


// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/Fonts/Roboto-Medium.ttf"),
//   });
// };
export default function App() {
  
  const [isReady, setIsReady] = useState(false);
  
  // const [fontsLoaded] = Font.useFonts({
  //   "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
  //   "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
  // });

  
    


//   if (!isReady) {
//     return <AppLoading startAsync={loadFonts()} onFinish={() => setIsReady(true)}/>
// }

 

useEffect(() => {
  async function loadFonts() {
    try {
      await Font.loadAsync({
        "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
      });
      SplashScreen.hideAsync();
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
  }
  loadFonts();
}, []);

if (!isReady) {
  return null;
}
  return (
    <RegistrationScreen/>
   
  );
};

