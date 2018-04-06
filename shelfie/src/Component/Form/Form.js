import React, {Component} from 'react';


export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            productName: '',
            price: 0,
            imgurl: ''
        }

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

    cancelButton() {
        this.myFormRef('Form').reset();
    }

    render() {
        return(
            <div className="Form">
                <h1>Form</h1>
                <h4>Image URL:</h4>
                <input onChange={e=>{this.inputImage(e.target.value)}}/>
                <h4>Product Name:</h4>
                <input onChange={e=>{this.inputProduct(e.target.value)}}/>
                <h4>Price:</h4>
                <input onChange={e=>{this.inputPrice(e.target.value)}}/><br/>
                <button onClick={_=>{this.cancelButton()}}>Cancel</button>
                <button onClick={_=>{this.addButton()}}>Add to Inventory</button>
            </div>
        )
    }
}