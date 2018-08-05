import {Platform, 
        StyleSheet, 
        Text, 
        View,
        Dimensions
    } from 'react-native';
var windowSize = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#82b1ff',
    },
    authorText: {
        fontSize: 18,
        color: "#4286f4",
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 15,
        // height: "auto"
    },
    descriptionView: {
        width: windowSize.width*0.6, 
        height: windowSize.height*0.3
    },
    listContainer: {

        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',

    },
    titleText: {
        textAlign: "center",
        fontSize: 15,
        color: "red",
        fontWeight: "bold"
    },
    headerText: {
        fontSize: 20,
        // padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        color: "white",
        fontWeight: "bold"
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    listViewStyle: {
        backgroundColor: "#ffffff",
        borderBottomColor: "#999999",
        borderBottomWidth: 0.5,
        padding: 10,
        // marginLeft: windowSize.width*0.025,
        // marginRight: windowSize.width*0.025

    },
    activityIndicatorView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    imageStyle: {
         width: 100, 
         height: 100, 
         resizeMode: "contain"
    },
    imageAndDescriptionView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    linkText: {
        fontSize:18,
        fontWeight:'900',
        color: "green"
    },
    linkView: {
        padding: 10,
    }
  });