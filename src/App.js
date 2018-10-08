import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import root from "./root";
import About from "./page/About";
import ProductList from "./page/Productlist";
import ProductListDetail from "./page/productListDetail";
import Contact from "./page/contact";
import Message from "./page/message";

import Head from './components/header/head';
import history from './components/history';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Head/>
                    <Route exact path="/" component={root}/>
                    <Route path="/about" component={About}/>
                    <Route path="/productList" component={ProductList} />
                    <Route  path={"/productListDetail/:head/:con"} component={ProductListDetail}/>
                    <Route  path={"/contact"} component={Contact} />
                    <Route  path={"/message"} component={Message}/>
                </div>
            </Router>
        );
    }
}

export default App;
