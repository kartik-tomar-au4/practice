import React from 'react';
import { connect } from 'react-redux';

class SearchInput extends React.Component {
    

    render(){
        return(
            <div>
                <h3>Add Search Fields for Shops</h3>
                Shop Name
                    <input name='shopName' type='text' onChange={this.props.handelChange}  />
                    Area
                    <select id="s-area" name="area" onChange={this.props.handelChange}  >
                        <option value=''>All</option>
                        {
                            this.props.shopArea.map((area, ind) => <option key={ind} value={area}>{area}</option>)
                        }
                    </select>
                    Category
                    <select id="s-category" name="category" onChange={this.props.handelChange} >
                    <option value=''>All</option>
                        {
                            this.props.shopCategory.map((category, ind) => <option key={ind} value={category}>{category}</option>)
                        }
                    </select>
                    {/* Open or Close
                    <select name='isOpen' onChange={this.props.handelChange} >
                        <option value=''>All</option>
                        <option value='open'>Open</option>
                        <option value='close'>Close</option>
                    </select> */}

            </div>
        )
    }
} 

const mapStateToProps = state => ({
    shopArea: state.shopData.shopData.areas,
    shopCategory: state.shopData.shopData.category
})

export default connect(mapStateToProps)(SearchInput);