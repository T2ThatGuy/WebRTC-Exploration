import { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AculabCloudProvider from '@providers/AculabCloud';

function Providers({ children }: { children: ReactNode }) {
    return (
        <NavigationContainer>
            <AculabCloudProvider>{children}</AculabCloudProvider>
        </NavigationContainer>
    );
}

export default Providers;
