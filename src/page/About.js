import React, {Component} from 'react';
import './About.css';
import Footer from '../components/footer/footer';

import slogan1 from '../images/slogan1.png';
import main5 from '../images/main5.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <div className={"about-title"}>
                    <p>关于我们</p>
                    <span>为各大重型工业工厂所制造的环境问题提供相关处理净化设备</span>
                </div>
                <div className={"about-md"}>
                    <div className={"left-area"}></div>
                    <div className={"right-area"}>
                        <h4>保护环境是我们每个人的责任</h4>
                        <p>XXX环保设备公司是一家专业从事环境污染治理和生态环境修复，集技术开发、技术服务、环保设备制造、工程总承包、资源综合利用的环保公司，主要产品以治理工业废气、、废水处理、固体废物、土壤修复为主，我公司产品有：净化设备，废气净化设备，酸废气净化器，有机废气净化器，干式废气净化
                            设备，湿式废气净化设备等。还生产噪声治理，暖通设备及电镀槽、水槽及排风净化设备、送风设备等。我公司生产的WGF-3型复合吸附剂治理酸废气净化器及DBS吸附剂荣获国家环保局最佳使用技术型奖。</p>
                        <div><img src={slogan1} alt={"slogan1"}/></div>
                    </div>
                </div>
                <div className={"about-main-title"}>
                    <p>团队成员</p>
                    <span>为各大重型工业工厂所制造的环境问题提供相关处理净化设备</span>
                </div>
                <div className={"about-main-body"}>
                    <ul>
                        <li>
                            <div></div>
                            <p>JERRY</p>
                            <p>高级工程师</p><span>保护环境是我们每个人的责任，环保是保持和发展生态平衡，扩大有用自然资源的再生产，协调人类与环境的关系。</span></li>
                        <li>
                            <div></div>
                            <p>李美娜</p>
                            <p>工程师</p><span>保护环境是我们每个人的责任，环保是保持和发展生态平衡，扩大有用自然资源的再生产，协调人类与环境的关系。</span></li>
                        <li>
                            <div></div>
                            <p>保罗</p>
                            <p>环境测试员</p><span>保护环境是我们每个人的责任，环保是保持和发展生态平衡，扩大有用自然资源的再生产，协调人类与环境的关系。</span></li>
                    </ul>
                    <span>保护环境是我们每个人的责任，环保是保持和发展生态平衡，扩大有用自然资源的再生产，协调人类与环境的关系。</span>
                </div>

                <div className={"about-main-bs"}>
                    <p>核心业务</p>
                    <span>为各大重型工业工厂所制造的环境问题提供相关处理净化设备</span>
                </div>

                <div className={"about-main-footer"}>
                    <span></span>
                </div>

                <div className={"feature"}>
                    <img className="sm" src={main5} alt={"服务"}/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;