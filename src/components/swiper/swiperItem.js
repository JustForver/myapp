import React, {Component} from 'react';
import './swiper.css'
export default class swiperItem extends Component{
    render(){
        let style={
            width:this.props.images.length*100+'vw',
            left:this.props.index*-100+'vw',
            transitionDuration:this.props.speed+'s'
        };
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((item,index)=>(
                        <li
                            className="slider"
                            key={index}
                        >
                            <img src={item} alt=""/>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
