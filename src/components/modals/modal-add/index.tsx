import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {useStyles} from './styles';

const ModalAdd = (props: IModalAdd) => {
  const {isVisible = true, onClose, isVisibleChange, height = 500} = props;
  const styles = useStyles();
  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackdropPress={onClose}
      deviceHeight={height}
      style={styles.container}
      swipeDirection={'down'}
      swipeThreshold={20}
      propagateSwipe={true}
      useNativeDriver
      useNativeDriverForBackdrop
      onBackButtonPress={onClose}>
      <View style={styles.styleModal}>
        <Text>Modal ADD</Text>
      </View>
    </ReactNativeModal>
  );
};

export default ModalAdd;
