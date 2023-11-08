import { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

function Providers({ children }: { children: ReactNode }) {
    return <NavigationContainer>{children}</NavigationContainer>;
}

export default Providers;
