import {
    View,
    Text,
    Image
} from "react-native";

import styles from "../../styles";

const reactLogo = require("../../assets/react-logo3.png");
const fbLogo = require("../../assets/fb-logo.png");
const history = require("../../assets/reactHistory.jpg");

export default function () {
    return (
        <>
        <View
        style={styles.container}
        >
            <Text
            style={styles.contentHeading}
            >
            What is React Native?
            </Text>
            <Text
            style={styles.contentInfo}
            >
                React Native is an open-source framework for building mobile applications using JavaScript and React. Developed by Facebook, it allows developers to use their existing knowledge of React (a popular JavaScript library for building user interfaces) to build native mobile apps for iOS and Android platforms.
            </Text>
            <Image
            source={reactLogo}
            style={styles.reactImg}
            />
            <Text
            style={styles.contentHeading}
            >
                Who is the creator of React Native?
            </Text>
            <Text
            style={styles.contentInfo}
            >
            React Native was first released by Facebook as an open-source project in 2015. In just a couple of years, it became one of the top solutions used for mobile development. React Native development is used to power some of the world’s leading mobile apps, including Instagram, Facebook, and Skype.
            </Text>
            <Image
            source={fbLogo}
            style={styles.fbImg}
            />
            <Text
            style={styles.contentHeading}
            >
                History of React Native
            </Text>
            <Text
            style={styles.contentInfo}
            >
                When Facebook first decided to make its service available on mobile devices, instead of building out a native app like many top tech players at the time, they decided to run with a mobile webpage based on HTML5. However, the solution didn’t stand the test of time, leaving much room for UI and performance improvements. In fact, in 2012, Mark Zuckerberg admitted that “the biggest mistake we made as a company was betting too much on HTML as opposed to native.”
            </Text>
            <Text
            style={styles.contentInfo}
            >
            Soon after, in 2013, Facebook developer Jordan Walke made a groundbreaking discovery – he found a method of generating UI elements for iOS apps by using JavaScript. This sparked a fire, and a special Hackathon was organized to further discover how much mobile development could be done using (so far, traditionally web-based) JavaScript solutions.
            </Text>
            <Image
            source={history}
            style={styles.historyImg}
            />
            <Text
            style={styles.contentInfo}
            >
                That’s how React Native came to life. Initially developed just for iOS, Facebook quickly followed it up with Android support, before taking the framework public in 2015.
            </Text>
        </View>
        </>
    )
}