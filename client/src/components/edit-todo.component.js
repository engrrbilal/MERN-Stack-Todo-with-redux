import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTodoWithId,updateTodo,deleteTodoWithId} from '../actions/dataActions';
class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        /* match.params.id is using from react-router-v4 matching id in url */
        this.props.getTodoWithId(this.props.match.params.id)
            .then(response => {
                console.log("response: ",response);
                this.setState({
                    todo_description: response.todo.todo_description,
                    todo_responsible: response.todo.todo_responsible,
                    todo_priority: response.todo.todo_priority,
                    todo_completed: response.todo.todo_completed
                })
            })
            .catch((error) =>{
                console.log("error while getting todo: ",error)
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }
    deleteTodo(){
        this.props.deleteTodoWithId(this.props.match.params.id)
        .then(res => {
            console.log(res.data);
            if(res){
                alert("Todo has been deleted successfully!")
                this.props.history.push('/')
            } else {
                alert("Server error while deleting todo");
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const todoToUpdate = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        this.props.updateTodo(this.props.match.params.id,todoToUpdate)
        .then(res => {
            console.log(res.data);
            if(res){
                alert("Todo has been updated successfully!")
                this.props.history.push('/')
            } else {
                alert("Server error while updating todo");
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="low"
                                    checked={this.state.todo_priority==='low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="medium"
                                    checked={this.state.todo_priority==='medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="high"
                                    checked={this.state.todo_priority==='high'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                            <input type="button" onClick={this.deleteTodo.bind(this)} value="Delete Todo" className="btn btn-danger marginHorizontal" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         todos:state.dataReducer.todos
//     }   
// }
const mapDispatchToProps = (dispatch) =>({
    updateTodo: (id,todoToUpdate) => dispatch(updateTodo(id,todoToUpdate)),
    getTodoWithId: (id) => dispatch(getTodoWithId(id)),
    deleteTodoWithId: (id) => dispatch(deleteTodoWithId(id))
})
export default connect(undefined, mapDispatchToProps)(EditTodo)