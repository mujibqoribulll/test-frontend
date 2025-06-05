import { StyleSheet } from "react-native"

export const useStyles = () => StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    letSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontWeight: '400'
    }
})