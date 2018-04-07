import React, {Component} from 'react';


export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 0,
            imageurl: ''
        }

        this.inputImage = this.inputImage.bind(this);
        this.inputProduct = this.inputProduct.bind(this);
        this.inputPrice = this.inputPrice.bind(this);
        this.addButton = this.addButton.bind(this);
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

    addButton() {
        console.log('hey') 
        // let body = {
        //     addProduct: this.state.productName,
        //     addPrice: this.state.price,
        //     addImg: this.state.imageurl
        // }
        this.setState({productName: '', price: '', imageurl: ''})
        console.log("hey, HEY")
        
    }

    cancelButton() {
        this.setState({
            productName: "",
            price: "",
            imageurl: "" 
    });
    }

    render() {
        return(
            <div className="form">
                <h1>Form</h1>
                <div className="form-img-preview">
                </div>
                <h4>Image URL:</h4>
                    <input className="input-field" value={this.state.imageurl} onChange={e=>{this.inputImage(e.target.value)}} placeholder="Add URL of Image Here"/>
                <h4>Product Name:</h4>
                    <input className="input-field" value={this.state.productName} onChange={e=>{this.inputProduct(e.target.value)}} placeholder="Add Product Name Here"/>
                <h4>Price:</h4>
                    <input className="input-field" value={this.state.price} onChange={e=>{this.inputPrice(e.target.value)}} placeholder="Add Price or Product Here"/><br/>
                <div className="btn">
                <button className="cancelBtn" onClick={_=>{this.cancelButton()}}>Cancel</button>
                <button className="addBtn"onClick={_=>{this.addButton()}}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}