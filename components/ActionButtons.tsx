// components/CustomButton.tsx
import React from 'react';
import { Text, StyleSheet, View, Pressable, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface CustomButtonProps {
    title: string;
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, iconName, onPress }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Ionicons name={iconName} size={24} color={Colors.primary} style={styles.icon} />
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 5,
        width: '30%', // Adjust width as needed
        height: 80, // Adjust height as needed
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        // Elevation for Android
        elevation: 6,
    },
    icon: {
        marginBottom: 5,
        // Space between the icon and the text
    },
    buttonText: {
        fontSize: 12,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default CustomButton;
