import React, {Fragment, Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            input: e.target.value
        });
    }

    addItem() {
        if (this.state.input === '') {
            alert('You must write something');
        } else {
            this.setState({
                items: [...this.state.items, this.state.input],
                input: ''
            });
        }
    }

    handleKey(e) {
        if (e.key === 'Enter') {
            if (this.state.input === '') {
                alert('You must write something');
            }
            else {
                this.setState({
                    items: [...this.state.items, {id: Date.now(), value: this.state.input}],
                    input: ''
                });
            }
        }
    }

    deleteItem(id) {
        const items = [...this.state.items];
        const updatedItems = items.filter(item => item.id !== id);
        this.setState({
            items: updatedItems
        });
    }

    render() {
        const itemsList = this.state.items.map(item => (
            <li key={item.id}>{item.value}
                <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
            )
        );

        return (
            <Fragment>
                <input value={this.state.input} onKeyPress={e => this.handleKey(e)} onChange={e => this.handleChange(e)} />
                <button onClick={() => this.addItem()}>Add Task</button>

                {itemsList}
            </Fragment>
        );
    }
}

export default TodoList;
