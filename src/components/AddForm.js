import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        //id for edit case
        id : "",

        name : "",
        status : false
      }
    }
  

    // edit taskEditting
    
    componentWillMount() {
      if(this.props.taskEditting)
      {
        this.setState({
          id : this.props.taskEditting.id,
          name : this.props.taskEditting.name,
          status : this.props.taskEditting.status
        })
      }
    }
    

    // Close form
    onCloseForm = () => {
      this.props.onCloseForm();
    }

    onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;

      if(name === "status")
      {
        value = target.value === "true" ? true : false;
      }

      this.setState({
        [name] : value
      })

      //console.log(name);
      //console.log(value);
    }

    onSubmit = (event) =>{
        event.preventDefault();
        // send data to app via props onSubmit for insert to task list

        this.props.onSubmit(this.state);
        //console.log(this.state);

        // Clear form
        this.onClear();

        // Close form

        // this.onCloseForm();

    }

    OnCancel = () => {
      this.onClear();
      this.onCloseForm();
    }

    onClear = () =>{
      this.setState({
        name : "",
        status : false
      })
    }

    onOpenForm = () => {
      this.setState({
        isDissplayForm : true
      })
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
                <button type="button" className="close" aria-label="Close" onClick={this.onCloseForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <h3 className="panel-title"> { id !== "" ? "Update todo-list" : "New Totolist"} </h3>
              </div>
              <div className="panel-body">
                <form  onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Job name :</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange}  className="form-control" />
                  </div>
                  <label> Status :</label>
                  <select className="form-control" name="status" value={this.state.status} onChange={this.onChange} required="required">
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

export default AddForm;