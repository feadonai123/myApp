import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { UserProvider } from './src/Hooks/UserContext';
import Main from './src';

export default App = () => {
    return (
        <NavigationContainer>
            <UserProvider>
                <Main/>
            </UserProvider>
        </NavigationContainer>
    );
};