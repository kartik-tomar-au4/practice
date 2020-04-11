import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addWaiter } from '../../redux/waiter-list/waiter-action';

class Waiter extends React.Component {

    componentDidMount(){
        axios.get(`http://localhost:5000/waiters`).then(res => {
            this.props.addWaiter(res.data)
        })
    }
    render(){
        return(
            <div>
                <h2>Waiters</h2>
                <ul>
                    <li>name ------ age ------ rating</li>
                    {
                        this.props.waiterList.map(waiter => <li key={waiter.id}>{waiter.name} ------- {waiter.age} --------- {waiter.rating}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    waiterList: state.waiterReducer.waiterList 
})

const mapDispatchToProps = dispatch => ({
    addWaiter: waiter => dispatch(addWaiter(waiter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);