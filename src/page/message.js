import React, {Component} from 'react';
import Footer from '../components/footer/footer';
import './message.css';

export default class Message extends Component {
    render() {
        return (
            <div>
                <div className="message-body">
                    <div>
                        <div className="message-message">
                            <h1>在线留言</h1>
                            <div>
                                <span>XX市云XX科技有限公司</span>
                                <span>Wuhan XXX Technology</span>
                            </div>
                        </div>
                    </div>
                    <div className="message-form">
                        <form method="post">
                            <ul>
                                <li><span>注:<i>*</i>号为必填哦</span></li>
                                <li>
                                    <label htmlFor="username">姓名</label>
                                    <input type="text" id="username" name="username"/>
                                    <i>*</i>
                                </li>
                                <li>
                                    <label htmlFor="tel">电话</label>
                                    <input type="text" id="tel" name="tel"/>
                                    <i>*</i>
                                </li>
                                <li>
                                    <label htmlFor="email">邮箱</label>
                                    <input type="text" id="email" name="email"/>
                                    <i>*</i>
                                </li>
                                <li>
                                    <label htmlFor="content">内容</label>
                                    <textarea id="content" name="content"/>
                                    <i>*</i>
                                </li>
                                <li>
                                    <button type="button" className="am-btn">提交</button>
                                    <span>注:<i>*</i>号为必填哦</span></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}