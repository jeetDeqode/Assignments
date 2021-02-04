import React, { Component } from 'react';
import { Button, View, Text, StyleSheet,Colors,TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Dashboard extends Component {
    render() {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Button style={styles.listBtnStyle} title={"List"}></Button>
            <Button style={styles.profileBtnStyle} title={"Profile"}></Button> */}
            <Text style={{fontSize:40, alignItems:'center',justifyContent:"center", color:"#000000"}}>Dashboard Screen</Text>
          <Button
          title="Go to Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
/>
<Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
/>
        </View>
    )
        }
}

const styles = StyleSheet.create({
    listBtnStyle: {
        color: '#ff0000',
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileBtnStyle: {
        color: '#ff0000',
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16
    }
})
