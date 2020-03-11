import React from 'react';
import { connect } from 'react-redux';

import { addShop } from '../../redux/shop-list/list-action';

class ShopInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            shopName: '',
            area: 'Jayanagar',
            category: 'Grocery',
            openingDate: '',
            closingDate: ''
        }
    }

    handelChange = event => {
        const { value, name } = event.target
        
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addShop(this.state)
    }

    render(){
        console.log(this.props.state)
        return(
            <div>
                <h2>Add New Shops</h2>
                <form onSubmit={this.handleSubmit}>
                    Shop Name
                    <input name='shopName' type='text' onChange={this.handelChange} value={this.state.shopName} required />
                    Area
                    <select id="area" name="area" onChange={this.handelChange} value={this.state.area} >
                        {
                            this.props.shopArea.map((area, ind) => <option key={ind} value={area}>{area}</option>)
                        }
                    </select>
                    Category
                    <select id="category" name="category" onChange={this.handelChange} value={this.state.category}>
                        {
                            this.props.shopCategory.map((category, ind) => <option key={ind} value={category}>{category}</option>)
                        }
                    </select>
                    Opening Date
                    <input type='date' name='openingDate' onChange={this.handelChange} value={this.state.openingDate} required/>
                    Closing Date
                    <input type='date' name='closingDate' onChange={this.handelChange} value={this.state.closingDate} required/>
                     <br/><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shopArea: state.shopData.shopData.areas,
    shopCategory: state.shopData.shopData.category,
    state: state
})

const mapDispatchToProps = dispatch => ({
    addShop: shop => dispatch(addShop(shop))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopInput);