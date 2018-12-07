import React from 'react';

const SmurfForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='name' placeholder='Name...' onChange={props.handleChange}/>
                <input type='number' name='age' placeholder='Age...' onChange={props.handleChange}/>
                <input type='text' name='height' placeholder='Height...' onChange={props.handleChange}/>
                <input type='submit' value='Add Smurf' />
            </form>
        </div>
    )};


export default SmurfForm;