import React, {Component} from 'react';
import qccode from "../../images/qccode.png";
import top from "../../images/1537887967180.jpg";
import './footer.css';
import $ from "jquery";

export default class footer extends Component{
    constructor(props){
        super(props);
        this.top = this.top.bind(this);
    }
    top(){
        $('body,html').animate({ scrollTop: 0 }, 200);
        return false;
    }
    render() {
        return (
            <div>
                <footer className={"footer"}>
                    <div className="footer-pc">
                        <ul>
                            <li><p>网站首页 | 关于我们 | 工程案例 | 新闻资讯 | 联系我们</p></li>
                            <li><p>地址：湖北省XXX市XXX大道XXX办公室</p></li>
                            <li><p>电话：0000-0000000</p></li>
                            <li><p>邮编：435400</p></li>
                        </ul>
                        <img src={qccode} alt={"二维码"} />
                    </div>
                    <div className="footer-phone">
                        <span onClick={()=>{this.top()}}>
                            <img src={top} alt={"回到顶部"} />
                        </span>
                    </div>
                </footer>
            </div>
        );
    }
}