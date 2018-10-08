import React,{Component} from 'react';
export default class swiperDot extends Component{
    render(){
        return (
            <div
                className="dots"
            >
                {
                    this.props.images.map((item,index)=>(
                        <span
                            key={index}
                            className={"dot "+(index===this.props.index?'active':'')}
                            onClick={()=>this.props.turn(index-this.props.index)}
                        >
                            {index+1}
                        </span>
                    ))
                }
            </div>
        )
    }
}