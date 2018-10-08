import React, { Component } from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";
import Footer from '../components/footer/footer';

import './productList.css';

class Productlist extends Component{
    constructor(props){
        super(props);
        this.state = {
            productList:[]
        };
        this.getProductList();
    }
    getProductList(){
        $.ajax({
            url:'./productList.json',
            dataType:'json',
            cache:false,
            success:productList =>{
                this.setState({productList:productList});
            },
            error:(xhr,status,error)=>{
                console.log(error);
            }
        });
    }
    render() {
        let productList = this.state.productList.map(
            (list) =>{
                return(
                    <div className={"prop-body"}  key={list.id}>
                        <ul>
                            <li>
                                <Link
                                    to={"/productListDetail/"+list.head+"/"+list.con}
                                    className={"pro-link-style"}>
                                    <img src={require("../"+list.url)} alt={""} />
                                    <div className="pro-rightarea">
                                        <p>{list.head}</p>
                                        <span>{list.context}</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                );
            }
        );
        return (
            <div>
                {productList}
                <Footer/>
            </div>
        );
    }
}

export default Productlist;