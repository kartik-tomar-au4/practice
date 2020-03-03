import React from 'react';
import { connect } from 'react-redux';

import SearchInput from '../search-input/search-input';
import ShopList from '../list/list';

class Search extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            shopName: '',
            area: '',
            category: ''
        }
    }

    filterBySearch = (shopList) => {
        let state1 = this.state;
        let shopList1 = shopList;
        if(state1.shopName !== ''){
             shopList1 = shopList1.filter(shop => shop.shopName.toLowerCase().includes(state1.shopName.toLocaleLowerCase()) )
        }
        if(state1.area !== ''){
            shopList1 = shopList1.filter(shop => shop.area === state1.area)
       }
       if(state1.category !== ''){
        shopList1 = shopList1.filter(shop => shop.category === state1.category)
       }
       return shopList1
    }

    handelChange = event => {
        const { value, name } = event.target
        
        this.setState({[name]: value})
    }

    render(){
    return (
        <div>
            <h2>Find Shop</h2>
            <SearchInput handelChange={this.handelChange} />
            <ShopList shopList={this.filterBySearch(this.props.shopList)} />
        </div>
    )
    }
}

const mapStateToProps = state => ({
    shopList: state.shopList.shopList
})

export default connect(mapStateToProps)(Search);