import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import useI18n from '../hooks/usei18n';
const Entry = () => {
    const t = useI18n();
    return (
        <View style={styles.container}>
            <Text>{t(`intro.helloworld`)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Entry;
