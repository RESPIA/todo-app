import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          //id for edit case
          id : "",
  
          name : "",
          status : false
        }
      }
    /*
    componentWillReceiveProps = (nextProps) =>{
        this.setState({
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            status : this.props.userEditObject.status
        })
    }
    */
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        
        this.setState({
            [name] : value
        })
    }
    
    onCloseEditForm = () => {
        this.props.onCloseEditForm();
     }

    OnCancel = () => {
        this.onClear();
        this.onCloseEditForm();
    }
  
    onClear = () =>{
        this.setState({
            name : "",
            status : false
        })
    }

    render() {
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
                <button type="button" className="close" aria-label="Close" onClick={this.onCloseEditForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <h3 className="panel-title"> Edit todo-list </h3>
              </div>
              <div className="panel-body">
                <form  onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Job name :</label>
                    <input type="text" name="name" onChange={this.onChange} value={this.props.userEditObject.name} className="form-control" />
                  </div>
                  <label> Status :</label>
                  <select className="form-control" name="status" onChange={this.onChange} value={this.props.userEditObject.status}  required="required">
                    <option value={true}> Active </option>
                    <option value={false}> Visibility </option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">Save Data</button>&nbsp;
                    <button type="reset" onClick={this.OnCancel} className="btn btn-danger">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
        );
    }
}

export default EditForm;