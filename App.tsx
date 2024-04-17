import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/theme/theme.ts';
import ApplicationNavigator from './src/navigations/ApplicationNavigator.tsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity, //* Need to change this based on the requirements
        },
    },
});

function App(): React.JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
                <SafeAreaView style={styles.mainContainer}>
                    <ApplicationNavigator />
                </SafeAreaView>
            </PaperProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
export default App;
