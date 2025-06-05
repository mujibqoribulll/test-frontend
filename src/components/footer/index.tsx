import {View} from 'react-native';
import {IcBack} from '../../assets/icons';
import ButtonTextIcon from '../buttons/buttonTextIcon';
import {useStyles} from './styles';

const Footer = (props: IFooter) => {
  const {} = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <ButtonTextIcon
        title="Gaya"
        icon={<IcBack width={20} height={20} />}
        styleContainer={styles.stylelist}
        styleTitle={styles.titleStylist}
      />
      <ButtonTextIcon
        title="Tambah"
        icon={<IcBack width={20} height={20} />}
        styleContainer={styles.addButton}
        styleTitle={styles.titleAddButton}
      />
      <ButtonTextIcon title="Export" icon={<IcBack width={20} height={20} />} />
    </View>
  );
};

export default Footer;
