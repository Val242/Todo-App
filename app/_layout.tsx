import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});


export default function RootLayout() {
  return  ( 
        <ConvexProvider client={convex}>
                <ThemeProvider >
                  <Stack screenOptions={{headerShown: false}} >
                  <Stack.Screen name="(tabs)" options={{title: "About"}}/>
                  </Stack>
               </ThemeProvider>
        </ConvexProvider>
  );
}


//screenOptions={{headerShown: false}}  to hide the header of the screen 
// <Stack.Screen name="$file name inside app folder" options={{title: "Screen name"}}/>


//TAB NAVIGATOR
//A tab navigator in React Native is a pattern that 
//creates a tab bar (usually at the bottom of the screen) allowing
//users to switch between different screens