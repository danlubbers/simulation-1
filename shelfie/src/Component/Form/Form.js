import React, {Component} from 'react';


export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 0,
            imgurl: ''
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
        let body = {
            addProduct: this.state.productName,
            addPrice: this.state.price,
            addImg: this.state.imageurl
        }
    }

    cancelButton(reset) {
        this.setState({imageurl: reset});
    }

    render() {
        return(
            <div className="form">
                <h1>Form</h1>
                <div className="form-img-preview">
                    
                </div>
                <h4>Image URL:</h4>
                    <input onChange={e=>{this.inputImage(e.target.value)}}/>
                <h4>Product Name:</h4>
                    <input onChange={e=>{this.inputProduct(e.target.value)}}/>
                <h4>Price:</h4>
                    <input onChange={e=>{this.inputPrice(e.target.value)}}/><br/>
                <div className="btn">
                <button className="cancelBtn" onClick={_=>{this.cancelButton()}}>Cancel</button>
                <button className="addBtn"onClick={_=>{this.addButton()}}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}