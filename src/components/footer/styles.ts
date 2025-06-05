import { StyleSheet } from 'react-native';

export const useStyles = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: 'grey',
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 6,
        },
        stylelist: {
            borderWidth: 1,
            borderColor: '#deb212',
            backgroundColor: 'transparent'
        },
        titleStylist: {
            color: '#deb212',
        },
        addButton: {
            borderWidth: 1,
            borderColor: '#3d82eb',
            backgroundColor: 'transparent',
        },
        titleAddButton: {
            color: '#3d82eb',
        }
    });
};
