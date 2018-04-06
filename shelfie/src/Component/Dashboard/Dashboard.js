import React, {Component} from 'react';
import Product from '../Product/Product.js';
import Form from '../Form/Form.js';


export default class Dashboard extends Component {

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                    <div className="product">
                        <Product />
                    </div>
                    <div className="form">
                        <Form />
                    </div>
            </div>
        )
    }
}