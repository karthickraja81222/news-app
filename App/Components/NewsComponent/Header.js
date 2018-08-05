import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import Geocoder from 'react-native-geocoder';
import {FETCHING_YOUR_ADDRESS} from "./constants"
import styles from "./styles.js"
export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getCurrentLocation();
        
    }

    getCurrentLocation(){
        return navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("position is: ",position)
                this.getCurrentAddress(position.coords.latitude, position.coords.longitude);
            },
            (error) =>{
                this.setState({ error: error.message })
                alert("Problem in Fetching your location. Try again");
                console.log("error is: ",error)
            } ,
            {},
            
        );
    }

    getCurrentAddress(latitude, longitude){
        var position = {
            lat: latitude,
            lng: longitude
        }
        Geocoder.geocodePosition(position).then(res => {
            console.log("res is: ",res);
            this.props.setAddress(res[0].formattedAddress);
            this.props.getNewsFromServer();
        })

    }
    render() {
        console.log("render props: ",this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>{this.props.userAddress? this.props.userAddress: FETCHING_YOUR_ADDRESS}</Text>
            </View>

        )
    }
}