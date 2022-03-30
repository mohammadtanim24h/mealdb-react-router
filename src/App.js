import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Meals from "./components/Meals/Meals";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/meals" element={<Meals></Meals>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
