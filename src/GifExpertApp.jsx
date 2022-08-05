import { useState } from 'react';

import {
    AddCategories,
    GifGrid
} from './components/index.components';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([]);

    const addCategory = (newCategory) => {
        if( categories.includes(newCategory) ){
            alert(`This category ${newCategory} already exists in the list`);
            return false;
        }
        setCategories( cat => [newCategory, ...cat]);
        return true;
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategories fnAddCategory={addCategory} />

            {
                // categories.map(c => <li key={c}>{c}</li>)
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
