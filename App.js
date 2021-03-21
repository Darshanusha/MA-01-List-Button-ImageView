import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Components from "./src/screens/Components";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColoursScreen from "./src/screens/ColoursScreen";
import Intencity from "./src/screens/components/Intencity";
import IntencityWithReducer from "./src/screens/components/IntencityWithReducer";
import PrintName from "./src/screens/PrintName";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components: Components,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColoursScreen: ColoursScreen,
    Intencity: Intencity,
    IntencityWithReducer: IntencityWithReducer,
    PrintName: PrintName,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First App",
    },
  }
);

export default createAppContainer(navigator);
