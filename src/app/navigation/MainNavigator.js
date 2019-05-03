import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import ToDo from '../screens/ToDo';
import Books from '../screens/Books';
import About from '../screens/About';
import { blueBackground } from '../constants/colors';
import BookDetail from '../screens/Books/screens/BookDetail';

const TodoStack = createStackNavigator({
  ToDo: ToDo,
}, {
  headerMode: 'none'
});

TodoStack.navigationOptions = {
  tabBarLabel: 'ToDo',
}

const ModalStack = createStackNavigator({
  BookDetail: BookDetail
}, {
  mode: 'modal',
  headerMode: 'none'
});

const BookStack = createStackNavigator({
  Books: Books,
  Modal: ModalStack
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
      backgroundColor: blueBackground
    }
  }
});
