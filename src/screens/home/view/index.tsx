import {SafeAreaView} from 'react-native-safe-area-context';
import {IcBack} from '../../../assets/icons';
import Canvas from '../../../components/canvas';
import Footer from '../../../components/footer';
import ModalAdd from '../../../components/modals/modal-add';
import Navbar from '../../../components/navbar';
import {useFunctionsHook} from '../functions/useFunctionsHooks';
import {useStyles} from './styles';

const Home = () => {
  const styles = useStyles();
  const {} = useFunctionsHook();

  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        title={'Meme generator'}
        icon={<IcBack width={20} height={20} />}
      />
      <Canvas />
      <Footer />
      <ModalAdd />
    </SafeAreaView>
  );
};

export default Home;
