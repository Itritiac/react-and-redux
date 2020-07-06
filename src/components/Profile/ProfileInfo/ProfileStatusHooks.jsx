import React, {useState, useEffect} from 'react';
import styles from './ProfileInfo.module.css';



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


        return (
            <div>
                {!editMode &&
                    <div className={styles.status__EditMode} onClick={activateEditMode}>
                    {props.status || "My status is empty"}
                    </div>
                }
                {editMode &&
                    <div >
                        
                        <input  className={styles.input__editMode}
                                onChange={onStatusChange}
                                autoFocus={true}
                                onBlur={deactivateEditMode}
                                value={status}
                               />
                    </div>
                }
            </div>
        )
    
}

export default ProfileStatusWithHooks;