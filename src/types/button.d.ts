import { StyleProp, TextStyle, ViewStyle } from "react-native"

type ButtonType = "submit" | "reset" | "button"

interface IButtonText {
    title: string
    onPress: () => void
}

interface IButtonIcon {
    icon: React.ReactNode
    onPress: () => void
}

interface IButtonIconText {
    icon: React.ReactNode
    title: string
    styleContainer?: StyleProp<ViewStyle>
    styleTitle?: StyleProp<TextStyle>
}