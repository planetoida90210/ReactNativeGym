import React from 'react';
import { Stack } from 'expo-router';

export default function _layout({children}) {
  return (

        <Stack
         
          screenOptions={{
            headerShown: false,
         
          }}

    >
        {children}
        </Stack>


  );
}
