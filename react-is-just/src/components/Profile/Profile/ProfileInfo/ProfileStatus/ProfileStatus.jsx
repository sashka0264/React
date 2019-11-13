import React, {Component} from "react";
import style from "./ProfileStatus.module.css";

class ProfileStatus extends Component {

  state = {
    newStatusText: "",
  }

  activateEditMode = () => {
    this.props.changeEditMode(true)
  }
  // Активация окна редактирования
  cancel = async() => {
    this.props.changeEditMode(false)
  }
  // Закрытие окна редактирования

  onChangeNewStatus = async(status) => {
    await this.setState({newStatusText: status});
  }
  // Сохранение ожидаемого нового статуса

  updateNewStatus = () => {
    this.props.updateUserStatusTC(this.state.newStatusText);

  }
  // Подтвержение ожидаемого нового статуса

  render() {
    return (
      <>
        {!this.props.editMode && <div onDoubleClick={(this.props.id === 5102) && 
          this.activateEditMode} className={style.appStatus}>
          {(!this.props.status && this.props.id === 5102) ? "изменить статус" : this.props.status}
        </div>} 

        {this.props.editMode && <div className={style.appStatusEditor}>
          <input 
            onChange={(e) => this.onChangeNewStatus(e.target.value)}
            autoFocus={true} 
          />
          <div>
            <button disabled={this.props.disabledEditMode} onClick={this.updateNewStatus} className={style.updateNewStatus}>Сохранить</button>
            <button disabled={this.props.disabledEditMode} onClick={this.cancel} className={style.cancel}>Отмена</button>
          </div>
        </div>} 

        
      </>
    )
  }
}

export default ProfileStatus;