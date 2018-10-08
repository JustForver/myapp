import React, {Component} from 'react';
import './head.css';
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import Swiper from '../swiper/swiper.js';
import history from '../history';
const Img = [
    require('../../images/banner.jpg'),
    require('../../images/banner2.jpg'),
    require('../../images/banner3s.jpg')
];

class head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStyle: 'none'
        };
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseSecondOut = this.onMouseSecondOut.bind(this);
        this.goToBack = this.goToBack.bind(this);
    }

    onMouse() {
        this.setState({
            displayStyle: 'block'
        });
    }

    onMouseOut() {
        this.setState({
            displayStyle: 'none'
        });
    }

    onMouseSecondOver() {
        this.setState({
            displayStyle: 'block'
        });
    }

    onMouseSecondOut() {
        this.setState({
            displayStyle: 'none'
        });
    }
    goToBack(){
        history.goBack();
    }

    render() {
        return (
            <div>
                <div className="header-top">
                    <div className="width-center">
                        <div className="header-logo "><img src={logo} alt="logo"/></div>
                        <div className="header-title div-inline">
                            <strong>XXX环保设备有限公司</strong>
                            <span>XXXHUANBAOSHEBEIYOUXIANGONGSI</span>
                        </div>
                        <div className="header-right">
                            <span>全国咨询热线</span>
                            <span>00-000-00000000</span>
                        </div>
                    </div>
                </div>
                <div className={"header-style"}>
                    <nav>
                        <ul>
                            <li><Link to={"/"} className={"Link-style"}>网站首页</Link></li>
                            <li><Link to={"/about"} className={"Link-style"}>关于我们</Link></li>
                            <li><Link to={"/productList"} className={"Link-style"}>工程案例</Link></li>
                            <li><Link to={""} className={"Link-style"}>新闻资讯</Link></li>
                            <li>
                                <Link
                                    to={"/contact"} className={"Link-style"}
                                    onMouseOver={this.onMouse.bind(this)}
                                    onMouseOut={this.onMouseOut}>
                                    联系我们
                                </Link>
                                <div
                                    className={"secondary-menu"}
                                    style={{display: this.state.displayStyle}}
                                    onMouseOver={this.onMouseSecondOver.bind(this)}
                                    onMouseOut={this.onMouseSecondOut}
                                >
                                    <ul>
                                        <li>
                                            <Link
                                                to={"/message"}
                                                className={"second-Link-style"}/>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"swiper-style"}>
                    <div className={"backBtn"}>
                        <span onClick={()=>this.goToBack()} className={"backBtn"} >&lt;</span>
                    </div>
                    <Swiper
                        images={Img}
                        speed={0.5}
                        delay={4}
                        autoPlay={true}
                        autoParse={true}
                    />
                </div>
            </div>
        );
    }
}

export default head;