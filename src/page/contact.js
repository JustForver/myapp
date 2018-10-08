import React, {Component} from 'react';
import Footer from '../components/footer/footer';
import './contact.css';
import Map from './map'

export default class contact extends Component{
    render() {
        return (
            <div>
                <div>
                    <div className="contact-header">
                        <h2>联系我们</h2>
                        <span>XX市XXX科技有限公司</span>
                        <span>XXX XXX XXX XXX </span>
                    </div>
                    <ul className="contact-icon">
                        <li><span /><span>邮件:</span><span>123456789@xxx.com</span></li>
                        <li><span /><span>电话:</span><span>0000-0000000</span></li>
                        <li><span /><span>公司地址:</span><span>XX市XX大道XX号XX楼XX层</span></li>
                    </ul>
                    <Map />
                </div>
                <Footer/>
            </div>
        );
    }
}