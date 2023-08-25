import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Index from "../pages";
import Sobre from "../pages/sobre";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" , width: 400, height: 100,}}
      >
        <Tab.Screen name="index" component={Index} />
        <Tab.Screen name="sobre" component={Sobre} />
        <Tab.Screen name="cadastro" component={Cadastro} />
        <Tab.Screen name="home" component={Home} />
        {/* <Tab.Screen name="Settings" component={} /> */}
      </Tab.Navigator>
  );
}
