import { useWindowDimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { clamp } from "../../utils/helpers";

export const useFunctionsHook = () => {

    const { width, height } = useWindowDimensions();
    const canvasWidth = width - 60;
    const canvasHeight = height / 2 - 20;
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);

    const panGesture = Gesture.Pan().onUpdate(event => {
        const maxX = (width - canvasWidth) / 2;
        const maxY = (height - canvasHeight) / 2;

        translateX.value = clamp(
            translateX.value + event.translationX,
            -maxX,
            maxX,
        );
        translateY.value = clamp(
            translateY.value + event.translationY,
            -maxY,
            maxY,
        );
    });

    const pinchGesture = Gesture.Pinch()
        .onUpdate(event => {
            scale.value = clamp(event.scale, 0.5, 3); // batas zoom 0.5x - 3x
        });

    // Combine pan and pinch
    const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: withSpring(translateX.value) },
            { translateY: withSpring(translateY.value) },
            { scale: scale.value }
        ],
    }));
    return {
        height, width, function: {
            composedGesture, animatedStyle
        }
    }
}