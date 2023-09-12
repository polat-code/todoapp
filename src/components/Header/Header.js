import React from 'react';
import {View, Text} from 'react-native';
import styles from "./Header.style";

const Header = (props) => {
    return (
        <View style={styles.container}>
             <Text style={styles.title_text}>Yapılacaklar</Text>
             <Text style={styles.numOfItem}>{props.numOfItem}</Text>
        </View>
    );
}

export default Header;
