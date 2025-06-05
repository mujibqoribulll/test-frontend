import {Text, View} from 'react-native';
import ButtonIcon from '../buttons/buttonIcon';
import ButtonText from '../buttons/buttonText';
import {useStyles} from './styles';

const Navbar = (props: INavbar) => {
  const {title, icon, onPress, back} = props;
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.letSide}>
          <ButtonIcon icon={icon} onPress={onPress} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <ButtonText title="Selesai" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
