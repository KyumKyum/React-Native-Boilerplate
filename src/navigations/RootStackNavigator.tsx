import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Entry from '../pages/Entry.tsx';

export type RootStackParamList = {
    //* Add page and required prop types in here.
    Entry: undefined;
};

const NavigationStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
    //* Add Header if required
    /*
    const renderSimpleHeader = (props: NativeStackHeaderProps) => (
        <SimpleHeader {...props} />
    );
    * */

    return (
        <NavigationStack.Navigator initialRouteName={'Entry'}>
            <NavigationStack.Screen
                options={{headerShown: false}}
                /*
                options={{
                    header: renderSimpleHeader,
                    contentStyle: { backgroundColor: 'white' },
                }}
                * */
                name={'Entry'}
                component={Entry}
            />
        </NavigationStack.Navigator>
    );
}
