import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./app/screen/Login";
import Register from "./app/screen/Register";
import Home from "./app/screen/Home";
const stack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: Home
  },
  {
    initialRouteName: "Login"
  }
);

const app = createAppContainer(stack);

export default app;
