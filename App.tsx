import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Home from "./src/pages/home";
import Splash from "./src/pages/Splash";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
      await new Promise((resolve) =>
        setTimeout(() => setIsLoading(false), 1000)
      );
    }

    prepare();
  }, []);

  return isLoading ? <Splash /> : <Home />;
}
