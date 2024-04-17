import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React from 'react';
import userInteractionStore from '../../stores/UserInteraction.ts';

interface DebouncedTouchableOpacityProps extends TouchableOpacityProps {
    onPress?: (() => void) | (<T>() => T);
    debouncePeriod: number;
}

const DebouncedTouchableOpacity: React.FC<DebouncedTouchableOpacityProps> = ({
    onPress,
    debouncePeriod,
    ...props
}) => {
    const debouncePress = () => {
        const curTime = Date.now();
        const gap = curTime - userInteractionStore.lastInteractionTimestamp;
        if (gap >= debouncePeriod) {
            userInteractionStore.updateLastInteraction();
            if (onPress) onPress();
        }
    };

    return <TouchableOpacity {...props} onPress={debouncePress} />;
};
