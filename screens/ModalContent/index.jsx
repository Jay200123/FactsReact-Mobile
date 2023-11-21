import {
    ImageBackground,
    View,
    Text,
    Button,
    ScrollView,
} from "react-native";

import {
    Facts
} from "../../components";

import styles from "../../styles";

import data from "../../data/facts";

const bgImg = require("../../assets/react-logo3.png");

export default function (facts) {
    
    const newFacts = data.map((f)=>{
        return <Facts{...f}/>
    })
    return (
        <>
        <ImageBackground
        source={bgImg}
        style={styles.modalBgImg}
        resizeMode="cover"
        >
            <ScrollView>
            <Text
            style={styles.modalHeader}
            >
                Short Facts About React Native
            </Text>
            {newFacts}
            <View
            style={styles.btnContainer}
            >
            <Button
            title="Go Back"
            onPress={facts.noFacts}
            />
            </View>
            </ScrollView>
        </ImageBackground>
        </>
    )
}