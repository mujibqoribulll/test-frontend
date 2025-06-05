import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useStyles} from './styles';

const ButtonText = (props: IButtonText) => {
  const {title, onPress} = props;
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonText;
