import { StyleSheet } from "react-native"

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 0,
        },
        styleModal: {
            backgroundColor: '#fff',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 10,
            width: '100%',
        },
    })
}