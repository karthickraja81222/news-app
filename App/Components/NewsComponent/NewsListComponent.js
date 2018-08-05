import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Linking,
    ActivityIndicator,
    ScrollView,
    WebView,
    TouchableOpacity
} from 'react-native';
import Geocoder from 'react-native-geocoder';
import moment from "moment";
import styles from "./styles.js"
import {CLICK_HERE_FOR_MORE_DETAILS} from "./constants"
export default class NewsListComponent extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: this.ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps is: ", nextProps)
        if (nextProps.newsDataFromAPI) {
            this.setState({
                dataSource: this.ds.cloneWithRows(nextProps.newsDataFromAPI),
            })
        }
    }

    render() {
        if (this.props.newsDataFromAPI === null) {
            return (
                <View style={styles.activityIndicatorView}>
                    <ActivityIndicator size="large" />
                </View>
            )
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            )
        }
    }

    renderRow(rowData, rowID) {
        var publishedDate = rowData.publishedAt || "";
        if (publishedDate) {
            var publishedDateTime = new Date(publishedDate);
            publishedDate = moment(publishedDateTime).format("YYYY-MM-DD HH:mm:ss");
        }
        var authorName = rowData.author || "unknown";
        return (
            <ScrollView horizontal={true}>
                <View style={styles.listViewStyle}>
                    <Text style={styles.titleText}>{rowData.title}</Text>
                    <Text style={styles.authorText}>{"Author: " + authorName}</Text>
                    <Text style={styles.authorText}>{"Date: " + publishedDate || "unKnown"}</Text>
                    <View style={styles.imageAndDescriptionView}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: rowData.urlToImage }}
                        />
                        <View style={styles.descriptionView}>
                            <Text style={styles.descriptionText}>{rowData.description || ""}</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    style = {styles.linkView}
                    onPress = {()=> Linking.openURL(rowData.url)}>
                        <Text style = {styles.linkText}>{CLICK_HERE_FOR_MORE_DETAILS}</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}