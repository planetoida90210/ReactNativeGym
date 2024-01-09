import React, { ReactNode } from 'react';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

interface LayoutProps {
  children: ReactNode;
}

const _layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Drawer>
      <Stack screenOptions={{ headerShown: false }}>{children}</Stack>;
    </Drawer>
  );
};

export default _layout;
