import React, { Component } from 'react';
import { View, Text, FlatList ,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import DataActions from '../redux/MovieListReducer';

class MovieListScreen extends Component {
    static navigationOptions = {
        title: 'List       ',
    };

    componentDidMount() {
        this.props.getData()
    }

    renderItem = (item) => {
        return (
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('MovieDetailScreen', { data: item }); }} underlayColor="white">
                <View style={{ margin: 5, padding: 20, elevation: 10, backgroundColor: 'orange' }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, textShadowColor: 'blue' }}>{item.Title}</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}> {item.Year}</Text>
                    </View>
                    <View style={{ color: 'white', width: '100%', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: 'white', fontSize: 12, textShadowColor: 'blue' }}>{item.Runtime}</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}> {item.Released}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <FlatList
                style={{ marginTop: 20 }}
                data={this.props.movieData.movieData ? this.props.movieData.movieData : []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => this.renderItem(item)}
            />
        )
    }
}

const mapStateToProps = (props) => {
    return props;

};
const mapDispatchToProps = dispatch => {
    return {
        getData: () => {

            dispatch(DataActions.getData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen);
