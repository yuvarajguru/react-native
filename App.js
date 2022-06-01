import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainPage from './src/screens/mainPage';
import ListPage from './src/screens/ListPage';
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import Task from './src/screens/Task';
import ReducerOne from "./src/screens/ReducerOne";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainPage,
    List: ListPage,
    Image: ImageScreen,
    Counter: CounterScreen,
    TaskOne: Task,
    ReducerOne: ReducerOne,
  },
  
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
