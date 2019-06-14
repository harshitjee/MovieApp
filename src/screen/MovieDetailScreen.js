import React, { Component } from 'react';
import { View, Text } from 'react-native'

class MovieDetailScreen extends Component {

    render() {
        item = this.props.navigation.state.params.data
        return (
            <View style={{ padding: 20, marginVertical: 40, marginHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, textShadowColor: 'blue', alignSelf: 'center' }}>{item.Title}</Text>
                <Text style={{ fontSize: 18, textShadowColor: 'blue', alignSelf: 'center' }}>{item.Plot}</Text>
                <View style={{ width: '100%', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 16 }}> {item.Country}</Text>
                    <Text style={{ fontSize: 16 }}> {item.Year}</Text>
                </View>
                <View style={{ width: '100%', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 16, textShadowColor: 'blue' }}>{item.Runtime}</Text>
                    <Text style={{ fontSize: 16 }}> {item.Released}</Text>
                </View>
            </View>
        )
    }
}

export default (MovieDetailScreen);
