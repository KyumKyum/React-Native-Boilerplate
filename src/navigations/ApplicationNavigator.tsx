import React from 'react';
import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';

const ApplicationNavigator: React.FC = observer(() => {
    //* Add Splash if required (Use Store)
    //* Add universial loading component inside Navigation Container
    return (
        <NavigationContainer>
            <RootStackNavigator />
        </NavigationContainer>
    );
});

export default ApplicationNavigator;
