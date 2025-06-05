import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {IButtonIconText} from '../../../types/button';
import {useStyles} from './styles';

const ButtonTextIcon = (props: IButtonIconText) => {
  const {icon, title, styleContainer, styleTitle} = props;
  const styles = useStyles();

  return (
    <View style={[styles.container, styleContainer]}>
      <TouchableWithoutFeedback>
        <View style={styles.content}>
          {icon}
          <Text style={[styles.title, styleTitle]}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ButtonTextIcon;
