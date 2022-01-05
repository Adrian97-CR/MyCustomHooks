import React, {useState} from 'react'
import PropTypes from 'prop-types'

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const reset = () => {
        setValues(initialState);
    }
    const handleInputChange = ({target}) => {
        setValues(s=>({...s, [target.name]:target.value}))
    }
    return [values, handleInputChange, reset];

}

useForm.propTypes = {

}

export default useForm;
