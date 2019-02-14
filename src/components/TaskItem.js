import React, { Component } from 'react';

class TaskItem extends Component {

    onUpdateStatus = () => {
        //console.log(this.props.task.id);
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onEditForm = () =>{
        this.props.onOpenEditForm();
        this.props.onUpdate();
    }

    render() {
        var {  task,index }   = this.props;
        return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                    <span className={task.status === true ? "label label-success" : "label label-danger" } onClick={this.onUpdateStatus} >
                        {task.status === true ? "Active" : "Visibility"}
                    </span>
                    </td>
                    <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditForm} >
                        <span className="fa fa-pencil mr-5" />Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5" />Delete
                    </button>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;