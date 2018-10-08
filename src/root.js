import React, {Component} from 'react';
import Footer from './components/footer/footer';
import './page/About.css';
import './root.css'
import {Link} from "react-router-dom";
import $ from "jquery";

import main1 from './images/main1.jpg';
import main2 from './images/main2.jpg';
import main3 from './images/main3.jpg';

import smcase4 from './images/smcase4.jpg';
import smcase5 from './images/smcase5.jpg';
import smcase6 from './images/smcase6.jpg';
import smcase7 from './images/smcase6.jpg';
import smbanner from './images/smbanner.jpg';

class root extends Component {
    constructor(){
        super();
        this.state={
            indexDate:[],
            newsDate:[]
        };

        this.getIndexDate();
    }
    getIndexDate(){
        let jsonFile = ['indexDate','newsDate'];
        jsonFile.forEach((file)=>{
            $.ajax({
                url:'./'+file+'.json',
                dataType:'json',
                cache:false,
                success:(data)=>{this.complete(data,file)},
                error:(xhr,status,error)=>{
                    console.log(error);
                }
            });
        });
    }
    complete(data,file){
        if(file && file === 'indexDate'){
            this.setState({
                indexDate:data
            });
        }else if(file && file ==='newsDate'){
            this.setState({
                newsDate:data
            });
        }
    }
    render() {
        let projectCaseDate = this.state.indexDate.map((item)=>{
            return(
                <div key={item.id}>
                    <Link to={'/'+item.projectCaseUrl}>
                        <img src={require('./'+item.projectCaseImg)} alt={item.id}/>
                        <div className={item.projectCaseClassName}>
                            <h6>{item.projectCaseH6}</h6>
                            <p>{item.projectCaseP}</p>
                        </div>
                    </Link>
                </div>
            );
        });
        let indexMainBody = this.state.indexDate.map((item)=>{
            return(
                <li key={item.id}>
                    <img src={require('./'+item.projectCaseImg)} alt={item.id}/>
                    <p>{item.projectCaseH6}</p>
                    <span>{item.indexMainBodySpan}</span>
                    <Link to="" className={item.indexMainBodyLinkClassName}>MORE</Link>
                </li>
            );
        });
        let newsDate = this.state.newsDate.map((item)=>{
            return(
                <li key={item.id}>
                    <Link to={'/'+item.url}>
                        <p>{item.P}</p>
                        <div>&gt;</div>
                        <span>{item.Span}</span>
                    </Link>
                </li>
            );
        });
        return (
            <div>
                <div className="index-only-small">
                    <ul>
                        <li><Link to="/about"><span /><p>关于我们</p></Link></li>
                        <li><Link to="/productList"><span /><p>工程案例</p></Link></li>
                        <li><Link to="/contact">    <span /><p>新闻资讯</p></Link></li>
                        <li><Link to="/contact"><span /><p>联系我们</p></Link></li>
                    </ul>
                </div>
                <div className={"about-title"}>
                    <p>关于我们</p>
                    <span>为各大重型工业工厂所制造的环境问题提供相关处理净化设备</span>
                </div>
                <div className="index-main-body">
                    <ul>
                        <li><img src={main1} alt={"图标"} className={"img-style"}/><p>工业废气净化</p></li>
                        <li><img src={main2} alt={"图标"} className={"img-style"}/><p>有机废气净化</p></li>
                        <li><img src={main3} alt={"图标"} className={"img-style"}/><p>粉尘净化</p></li>
                    </ul>
                    <p>我公司主要产品以治理工业废气为主，我公司产品有：净化设备，废气净化设备，酸废气净化器，有机废气净化器，干式废气净化 设备，湿式废气净化设备等。还生产噪声治理，
                        暖通设备及电镀槽、水槽及排风净化设备、送风设备等。我公司生产的WGF-3型复合吸附剂治理酸废气净化器及DBS吸附剂荣获国家环保局最佳使用技术型...</p>
                    <Link to={""}>了解更多</Link>
                </div>
                <div className="index-sm-banner">
                    <img src={smbanner} alt={"治理工程图"} />
                        <p>
                            XX环保设备公司是一家专业从事环境污染治理和生态环境修复，集技术开发、技术服务、环保设备制造、工程总承包、资源综合利用的环保公司，主要产品以治理工业废气、废水处理、固体废物、土壤修复为主，我公司产品有：净化设备，废气净化设备，酸废气净化器，有机废气净化器，干式废气净化
                            设备，湿式废气净化设备等。还生产噪声治理，暖通设备及电镀槽、水槽及排风净化设备、送风设备等。我公司生产的WGF-3型复合吸附剂治理酸废气净化器及DBS吸附剂荣获国家环保局最佳使用技术型奖。
                        </p>
                        <span />
                </div>
                <div className="project-case-body">
                    <p>工程案例</p>
                    <span>为各大重型工业工厂所制造的环境问题提供相关处理净化设备</span>
                </div>

                <div className="project-case">
                    {projectCaseDate}
                </div>
                <div className="index-main-body">
                    <ul>
                        {indexMainBody}
                    </ul>
                </div>
                <div className="news-info">
                    <h2>新闻资讯</h2>
                    <div>
                        <ul>
                            <li className="news-left">
                                <img src={smcase4} alt={"3"}/>
                                <div>
                                    <p>全国各地将大幅度提高垃圾处理费排污费</p>
                                    <span>继居民垃圾处理费，排污费后，全国各省市将会陆续公布相似措施，且二氧化硫等排污费还会列入未来环境税征收范围</span><Link
                                    to="">MORE</Link>
                                </div>
                            </li>
                            <li>
                                <img src={smcase5} alt={"3"}/>
                                <div>
                                    <p>全国各地将大幅度提高垃圾处理费排污费</p>
                                    <span>继居民垃圾处理费，排污费后，全国各省市将会陆续公布相似措施，且二氧化硫等排污费还会列入未来环境税征收范围</span><Link
                                        to="">MORE</Link></div>
                            </li>
                            <li>
                                <img src={smcase6} alt={"3"}/>
                                <div><p>全国各地将大幅度提高垃圾处理费排污费</p>
                                    <span>继居民垃圾处理费，排污费后，全国各省市将会陆续公布相似措施，且二氧化硫等排污费还会列入未来环境税征收范围</span><Link
                                        to="">MORE</Link></div>
                            </li>
                            <li>
                                <img src={smcase7} alt={"3"}/>
                                <div><p>全国各地将大幅度提高垃圾处理费排污费</p>
                                    <span>继居民垃圾处理费，排污费后，全国各省市将会陆续公布相似措施，且二氧化硫等排污费还会列入未来环境税征收范围</span><Link
                                        to="">MORE</Link></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"clear"} />

                <div className="news-dynamic-style">
                    <h2>新闻动态</h2>
                    <ul className={"date-style"}>
                        {newsDate}
                    </ul>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default root;