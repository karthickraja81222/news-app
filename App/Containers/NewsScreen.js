import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


import Header from "../Components/NewsComponent/Header";
import NewsListComponent from "../Components/NewsComponent/NewsListComponent";
import {connect} from "react-redux";
import * as ReduxStateAndPropsMapping from "../actions/ReduxStateAndPropsMapping/ReduxStateAndPropsMapping"
class NewsScreen extends Component {
    constructor(props){
        super(props);
        console.log("props is: ",props)
    }
    render() {
        return (
            <View style = {{flex: 20}}>
                <View style={{ flex: 2 }}>
                    <Header {...this.props}/>
                </View>

                <View style={{ flex: 8 }}>
                    <NewsListComponent {...this.props}/>
                </View>

            </View>

        )
    }
}

export default connect(ReduxStateAndPropsMapping.mapStateToProps, ReduxStateAndPropsMapping.mapDispatchToProps)(NewsScreen)