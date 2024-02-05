import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
       <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack>
  );
};

export default RootLayout;
