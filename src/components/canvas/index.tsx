import {Text, View} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useStyles} from './styles';
import {useFunctionsHook} from './useFucntiosHook';

const Canvas = (props: ICanvas) => {
  const {} = props;
  const {
    height,
    width,
    function: {animatedStyle, composedGesture},
  } = useFunctionsHook();
  const styles = useStyles(width, height);

  return (
    <GestureDetector gesture={composedGesture}>
      <View style={styles.container}>
        <Animated.View style={[styles.content, animatedStyle]}>
          <Text>fdsfdsfd</Text>
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

export default Canvas;
