

import Products from "./pages/Products";
import Home from "./pages/Products/Home";
import { Routes,Route,Navigate} from "react-router-dom"
import Catalog from "./components/Main/components/Catalog";
import VarietyPizzas from "./pages/VarietyPizzas";
import VarietySalads from "./pages/VarietySalads";
import VarietyStarters from "./pages/VarietyStarters";
import VarietySandwiches from "./pages/VarietySandwiches";
import VarietyBoxers from "./pages/VarietyBoxers";
import VarietyBeverages from "./pages/VarietyBeverages";
import VarietySouses from "./pages/VarietySouses";
import About from "./pages/About";
import Login from "./pages/Login";
import Authorization from "./pages/Authorization";
import VarietyPizzaHotDog from "./pages/VarietyPizzaHotDog";
import { useSelector } from 'react-redux'
import { useState, useMemo } from "react";
import ProductPizzasModal from "./components/ProductPizzasModal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainSmall from "./components/Main/components/MainSmall";
import AuthorizationLogin from "./pages/AuthorizationLogin";
import LoginForm from "./pages/Login/components/LoginForm";
import OrderBasket from "./components/OrderBasket";
import MenuSearchInput from "./components/MenuSearchInput";
import ProductModal from "./components/ProductModal";
import ProductCheesyModal from "./components/ProductCheesyModal";


function App() {


const [mode, setMode] = useState("light");
const darkMode = useSelector((state) => state.theme.darkMode);

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
         
          primary: {
            main: "#fffbeb",
          
          },
          text: {
            primary: "#fff",
            secondary: "#fff",
          },
          
        }
      : {
          
          primary: {
            main: "#dbf4ff",
            primary: "#fff",
            
          },
         
        }),
  },
});

useMemo(() => {
  if (darkMode) {
    setMode("dark");
  } else {
    setMode("light");
  }
}, [darkMode]);

const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
   
    <div  className={theme.palette.mode === "dark"  ? 'app' : 'app1'}>
  <ThemeProvider theme={theme}>   
<Routes>
<Route   path="/home" element={<Home/>} />
<Route   path="/products" element={<Products/>} />

<Route  element={<Products/>} >
  <Route  path="/varietyPizzas" element={<VarietyPizzas/>}/>
<Route   path="/catalog" element={<Catalog/>} />
<Route   path="/varietySalads" element={<VarietySalads/>} />
<Route   path="/varietyStarters" element={<VarietyStarters/>} />
<Route   path="/varietySandwiches" element={<VarietySandwiches/>} />
<Route   path="/varietyBoxers" element={<VarietyBoxers/>} />
<Route   path="/varietyBeverages" element={<VarietyBeverages/>} />
<Route   path="/varietySouses" element={<VarietySouses/>} />
<Route  path="/varietyPizzaHotDog" element={<VarietyPizzaHotDog/>}/>
</Route>
<Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/loginForm" element={<LoginForm/>}/>
<Route path="/authorization" element={<Authorization/>}/>
<Route path="/authorizationLogin" element={<AuthorizationLogin/>}/>
<Route path="/productPizzasModal" element={<ProductPizzasModal/>}/>
<Route path="/mainSmall" element={<MainSmall/>}/>
<Route path="/orderBasket" element={<OrderBasket/>}/>
<Route path="/menuSearchInput" element={<MenuSearchInput/>}/>
<Route path="/productModal" element={<ProductModal/>}/>
<Route path="/productCheesyModal" element={<ProductCheesyModal/>}/>
<Route  exact='true' path="*" element={<Navigate to='/home' />} />
</Routes>
</ThemeProvider>
    </div>
  
  );
}

export default App;
