import React from 'react';

const FlagChoices = props => {
    let options = props.options || [];
    const {handleChange, handleSubmit} = props;
    let inputs = options.map(input => (
        <label key = {input.id}>
            <input type="radio" value={input.id} checked={input.checked} onChange={handleChange} name="flag-choice" />
            {input.name}
        </label>
    ));

    return (
        <form onSubmit={handleSubmit}>
            {inputs}
            <button text="guess" type="submit">Guess</button>
        </form>
    )
}

export default FlagChoices;