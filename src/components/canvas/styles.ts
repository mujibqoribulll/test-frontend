import { StyleSheet } from "react-native"


export const useStyles = (width, height) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        content: {
            borderWidth: 0.90,
            borderColor: '#a0a3a1',
            backgroundColor: '#fff',
            width: width / 1 - 60,
            height: height / 2 - 20,
            padding: 10,
        }
    })
}