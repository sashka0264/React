import React, {Component} from "react";
import style from "./ProfileStatus.module.css";

class ProfileStatus extends Component {

  state = {
    editMode: false,
    status: this.props.status,
    newStatusText: ""
  }

  activateEditMode = async() => {
    debugger;
    await this.setState({editMode: true});
  }

  onChangeNewStatus = async(status) => {
    await this.setState({newStatusText: status});
  }

  updateNewStatus = async() => {
    await this.setState({status: this.state.newStatusText});
    await this.setState({editMode: false});
  }

  render() {
    return (
      <>
        {!this.state.editMode && <div onDoubleClick={this.activateEditMode}  className={style.appStatus}>{this.state.status}</div>} 

        {this.state.editMode && <div className={style.appStatusEditor}>
          <input 
            onChange={(e) => this.onChangeNewStatus(e.target.value)}
            autoFocus={true} 
          />
          <button onClick={this.updateNewStatus}>Сохранить</button>
        </div>} 

        
      </>
    )
  }
}

export default ProfileStatus;