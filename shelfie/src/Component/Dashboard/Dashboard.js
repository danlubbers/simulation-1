import React, {Component} from 'react';
import Product from '../Product/Product.js';


export default class Dashboard extends Component {

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                    <div className="product">
                        <Product />
                    </div>
            </div>
        )
    }
}