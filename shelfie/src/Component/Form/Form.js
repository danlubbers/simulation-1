import React, {Component} from 'react';
// import axios from 'axios';


export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productName: '',
            price: 0,
            imageurl: '',
            baseURL: '/api'
        }

        this.inputImage = this.inputImage.bind(this);
        this.inputProduct = this.inputProduct.bind(this);
        this.inputPrice = this.inputPrice.bind(this);
        this.cancelButton = this.cancelButton.bind(this);

    }

    inputImage(string) {
        this.setState({imageurl: string});
    }

    inputProduct(string) {
        this.setState({productName: string});
    }

    inputPrice(num) {
        this.setState({price: num});
    }

    

    cancelButton() {
        this.setState({
            productName: "",
            price: 0,
            imageurl: "" 
    });
    }

    render() {
        console.log(this.state)
        return(
            <div className="form">
                <div className="form-img-preview">
                </div>
                <h4>Image URL:</h4>
                    <input className="input-field" value={this.state.imageurl} onChange={e=>{this.inputImage(e.target.value)}} placeholder="Add URL of Image Here"/>
                <h4>Product Name:</h4>
                    <input className="input-field" value={this.state.productName} onChange={e=>{this.inputProduct(e.target.value)}} placeholder="Add Product Name Here"/>
                <h4>Price:</h4>
                    <input className="input-field" value={this.state.price} onChange={e=>{this.inputPrice(e.target.value)}} placeholder="Add Price of Product Here"/><br/>
                <div className="btn">
                <button className="cancelBtn" onClick={_=>{this.cancelButton()}}>Cancel</button>
                <button className="addBtn"onClick={_=>{this.props.addButton(this.state.imageurl, this.state.productName, this.state.price)}}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}