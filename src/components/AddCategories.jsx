import { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategories = ({fnAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => setInputValue( target.value );

    const onSubmit = (e) => {
        e.preventDefault();

        const newCategory = inputValue.trim();
        if(newCategory.length <=1) return;

        if( fnAddCategory(newCategory) ) setInputValue('');
    }
    return (
    <>
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange} />
        </form>
    </>
    )
}


AddCategories.propTypes = {
    fnAddCategory: PropTypes.func.isRequired
}