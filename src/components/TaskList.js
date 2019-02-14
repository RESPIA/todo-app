import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        // show list data
        var { tasks } = this.props;
        var elmTasks = tasks.map((task,index)=>{
          return <TaskItem   
                  key={task.id} 
                  index={index} 
                  task={task} 
                  onUpdateStatus={this.props.onUpdateStatus}
                  onDelete={this.props.onDelete}
                  onUpdate={(data) => this.props.onUpdate(task)}
                  onOpenEditForm ={this.props.onOpenEditForm}
                  />
        });
        return (
            <div>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <select className="form-control">
                          <option value={-1}>All</option>
                          <option value={0}>Visibility</option>
                          <option value={1}>Active</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    
                    { elmTasks }
                  </tbody>
                </table>
            </div>
        );
    }
}

export default TaskList;