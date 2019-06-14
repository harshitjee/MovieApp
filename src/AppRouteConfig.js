import {
   createAppContainer,
   createStackNavigator
} from 'react-navigation'
import MovieListScreen from './screen/MovieListScreen'
import MovieDetailScreen from './screen/MovieDetailScreen'

const stack = createStackNavigator({
   MovieListScreen,
   MovieDetailScreen
})

export const RootStack = createAppContainer(stack);
