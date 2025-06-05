import {TouchableWithoutFeedback, View} from 'react-native';
import {useStyles} from './styles';

const ButtonIcon = (props: IButtonIcon) => {
  const {icon, onPress} = props;
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>{icon}</View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonIcon;
