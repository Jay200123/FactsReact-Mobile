import { React, } from "react";
import {
    View,
    Text,
    Image
} from "react-native";

import styles from "../../styles";

const navImg = require("../../assets/react-icon.png");

export default function () {
    return (
        <>
        <View
        style={styles.navbar}
        >
            <Image
            style={styles.navImg}
            source={navImg}
            />
            <Text
            style={styles.navHeaders}
            >
                React Native Facts 
            </Text>
        </View>
        </>
    )
}