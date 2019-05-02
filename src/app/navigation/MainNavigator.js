import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import ToDo from '../screens/ToDo';
import Books from '../screens/Books';
import About from '../screens/About';
import { colors } from '../constants/colors';

const TodoStack = createStackNavigator({
  ToDo: ToDo,
}, {
  headerMode: 'none'
});

TodoStack.navigationOptions = {
  tabBarLabel: 'ToDo',
}

const BookStack = createStackNavigator({
  Books: Books
}, {
  headerMode: 'none'
});

BookStack.navigationOptions = {
  tabBarLabel: 'Books',
};

const AboutStack = createStackNavigator({
  About: About
}, {
  headerMode: 'none'
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
}

export default createMaterialTopTabNavigator({
  TodoStack,
  BookStack,
  AboutStack,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: colors.blueBackground
    }
  }
});
