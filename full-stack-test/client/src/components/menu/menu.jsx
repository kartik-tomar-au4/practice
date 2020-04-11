import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addMenu } from '../../redux/menu-list/menu-action';

class Menu extends React.Component {

    componentDidMount(){
        axios.get(`http://localhost:5000/menu`).then(res => {
            this.props.addMenu(res.data)
        })
    }
    render(){
        return(
            <div>
                <h2>Menus</h2>
                <ul>
                    <li>name ------ type -------------- cuisine ------------ price</li>
                    {
                        this.props.menuList.map(menu => <li key={menu.id}>{menu.name} ------- {menu.type} --------- {menu.cuisine} -------- {menu.price}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    menuList: state.menuReducer.menuList 
})

const mapDispatchToProps = dispatch => ({
    addMenu: menu => dispatch(addMenu(menu))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);