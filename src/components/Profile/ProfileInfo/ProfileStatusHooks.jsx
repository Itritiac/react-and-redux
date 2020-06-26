

import React, {useState, useEffect} from 'react';



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
                    <div onClick={activateEditMode}>
                        <strong>Status: </strong>{props.status || "My status is empty"}
                    </div>
                }
                {editMode &&
                    <div >
                        <strong>Status: </strong>
                        <input onChange={onStatusChange}
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