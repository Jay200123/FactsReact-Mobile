import {
  useState
} from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
  Button,
  Alert,
  Modal
 } from 'react-native';

import {
  Navbar,
  Content,
} from "./components";

import {
  ModalContent
} from "./screens";

import styles from "./styles/index";

const bg = require("./assets/dark-bg2.jpg");

export default function App() {
  const[facts, setFacts] = useState(false);

  const YesFacts = () => {
    setFacts(facts => !facts);
  };

  const NoFacts = ()=>{
    setFacts(false);
  }
  const options = [
    {
      text:"Yes",
      onPress:YesFacts
    },
    {
      text:"No",
      onPress:NoFacts
    }
  ];

  const alertBox = () => {
    Alert.alert("Notification", "Looking for Short Facts About React Native?", options);
  };

  
  return (
    <>
    <StatusBar
    backgroundColor="black"
    barStyle="white-content"
    />
    <ImageBackground
    source={bg}
    style={styles.bgImg}
    resizeMode='cover'
    >
      <ScrollView>
        <Navbar/>
        <View
        style={styles.mainContent}
        >
        <Content/>
        <Button
        title="Facts About React Native"
        color="darkblue"
        onPress={alertBox}
        />
        <Modal
        visible={facts}
        animationType="fade"
        onRequestClose={NoFacts}
        >
          <ModalContent noFacts={()=>NoFacts()}/>
        </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
    </>
  );
}

