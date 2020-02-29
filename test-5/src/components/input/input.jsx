import React from 'react';
import { connect } from 'react-redux';
import { onInput, onSelect } from '../../redux/input/input-action'

const Input = ({addTodoTask, inputField, onSelect, onInput}) => (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            onInput('');
            let gg = `${inputField.option}---${inputField.task}`
            addTodoTask(gg)
        }}>
            <input type='text' onChange={e => onInput(e.target.value)} value={inputField.task} />
            <select id="cars" name="cars" onChange={e => {
                onSelect(e.target.value)}}>
              <option value="Kartik">Kartik</option>
              <option value="Prasoon">Prasoon</option>
            </select>
            <button type='submit'>Submit</button>
        </form>
    </div>
)

const mapStateToProps = state => ({
    inputField: state.inputField
})

const mapDispatchToProps= dispatch => ({
    onInput: input => dispatch(onInput(input)),
    onSelect: option => dispatch(onSelect(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);