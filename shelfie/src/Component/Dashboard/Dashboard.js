import React, {Component} from 'react';
import Product from '/Users/danlubbers/devmtn-lessons/week-3/day-5/simulation-1/shelfie/src/Component/Product/Product.js';


export default class Dashboard extends Component {

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                <p><Product /></p>
            </div>
        )
    }
}