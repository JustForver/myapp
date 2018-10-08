import React, {Component} from 'react';
import './productListDetail.css';

class ProductListDetail extends Component {
    render() {
        let head = this.props.match.params.head;
        let con = this.props.match.params.con;
        return (
            <div>
                <div className={"article-contents"}>
                    <h4>{head}</h4>
                    <p>{con}</p>
                </div>
            </div>
        );
    }
}

export default ProductListDetail;