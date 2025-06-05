import { StyleSheet } from "react-native";

export const useStyles = () => StyleSheet.create({
    container: {
        backgroundColor: '#3d82eb',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50,
        overflow: 'hidden',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
    },
    title: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '600',
    }
})