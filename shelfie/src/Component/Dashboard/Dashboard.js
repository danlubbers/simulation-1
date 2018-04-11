import React, {Component} from 'react';
import Product from '../Product/Product.js';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            baseURL: '/api'
        }
    }
   

    render() {

        let productsArray = this.props.products.map((element, index)=> {
            return(
              <div key={index} className="products-list">
              <div>
                <img  className="products-image" src={element.image_url} alt="arcteryx products"/>
              </div>
              <div className="product-box">
                <h3>{element.name}</h3>
                <h3>${element.price}</h3>
              </div> 
                <div className="product-btns">
                    <button className="delete-btn" onClick={_=> this.props.deleteProduct(element.id)}>Delete</button>
                    <button className="edit-btn" onClick={_=>{}}>Edit</button>
                </div>
              </div>
            )
          })

        return(
            <div className="dashboard">
                    <div className="product-container">
                        <Product />
                    <div>{productsArray}</div>
                    </div>
                    
            </div>
        )
    }
}