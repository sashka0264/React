/* eslint-disable react/prop-types */
import React, {useState} from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = ({status, id, isAuthUserId, updateUserStatusTC}) => {
  
  const [editMode, setEditMode] = useState(false);
  const [newStatus, updateNewStatus] = useState("");
  const [disabled, setDisabled] = useState(false);

  // useEffect(() => console.log("done"))
  // Когда произойдет отрисовка, код выполнится
  // useEffect(() => console.log("done"), [props.status])
  // Когда произойдет отрисовка, код выполнится, если изменился props.status

  const statusText = (!status && id === isAuthUserId) ? "изменить статус" : status;

  const activateMode = () => {
    if (id === isAuthUserId) {
      setEditMode(true);
    }
  };

  const deactivateMode = () => {
    setEditMode(false);
    updateNewStatus("");
  };

  const onChangeNewStatus = (newStatus) => {
    updateNewStatus(newStatus);
  };

  const sendNewStatus = () => {
    setDisabled(true);
    updateUserStatusTC(newStatus).then(() => {
      setEditMode(false);
      setDisabled(false);
    });
  };

  return (
    <>
      {!editMode && 
      <div className={style.appStatus} onDoubleClick={activateMode}>
        {statusText}
      </div>} 

      {editMode && 
      <div className={style.appStatusEditor}>
        <input onChange={(e) => onChangeNewStatus(e.target.value)} autoFocus={true}/>
        <div>
          <button disabled={disabled} onClick={sendNewStatus} className={style.updateNewStatus}>Сохранить</button>
          <button disabled={disabled} onClick={deactivateMode} className={style.cancel}>Отмена</button>
        </div>
      </div>}    
    </>
  );
};

export default ProfileStatus;