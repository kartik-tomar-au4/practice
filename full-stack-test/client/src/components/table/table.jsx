import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addTable } from '../../redux/table-list/table-action';

class Table extends React.Component {

    componentDidMount(){
        axios.get(`http://localhost:5000/tables`).then(res => {
            this.props.addTable(res.data)
        })
    }

    render(){
        return(
            <div>
                <h2>Tables</h2>
                <ul>
                    <li>name ------ floor ------ strength</li>
                    {
                        this.props.tableList.map(table => <li key={table.id}>{table.name} ------- {table.floor} --------- {table.strength}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tableList: state.tableReducer.tableList 
})

const mapDispatchToProps = dispatch => ({
    addTable: table => dispatch(addTable(table))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);