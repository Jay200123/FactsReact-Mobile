import {
    View,
    Text
} from "react-native";

import styles from "../../styles";

export default function (data) {
    return (
        <>
         <View
            style={styles.factsContainer}
         >
            <Text
            style={styles.factsHeader}
            >
                {data.id}.) {data.title}
            </Text>
            <Text
            style={styles.factsInfo}
            >
                {data.info}
            </Text>
        </View>
        </>
    )
}