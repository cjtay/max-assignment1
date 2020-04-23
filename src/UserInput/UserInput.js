import React from 'react';

const UserInput = (props) => {
    return (
        <>
            <h1>UserInput:</h1>
            <input
                type="text"
                value={props.value}
                onChange={props.nameChange}
            />
        </>
    );
};

export default UserInput;
