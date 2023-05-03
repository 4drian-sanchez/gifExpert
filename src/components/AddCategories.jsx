import { useState } from "react"
import { useFetchGif } from "../hooks/useFetchGif";

export const AddCategories = ( { addCategory } ) => {

    const [inputValue, setInputValue] = useState('');
    
    const hundleChange = ( { target: { value } } ) => setInputValue( value );
    
    const hundleSubmit = e => {
        e.preventDefault();
        const newInputValue = inputValue.trim().toLowerCase();
        if( newInputValue.length === 0 ) return;
        addCategory( newInputValue );
        setInputValue('');
      } 
  return (

    <form 
        onSubmit={ hundleSubmit }
    >
        <input 
            type="search"
            className="form-control"
            value={inputValue}
            placeholder='Busca un gif'
            onChange={ hundleChange }
             />
    </form>

  )
}
