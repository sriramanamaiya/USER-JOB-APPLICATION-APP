import React from 'react'

const  InputField = (props) => {
    const { text, inputType, fieldValue, fieldName, placeholderValue, handleFocus, handleChange, formErrors } = props

    return (
        <div className="row mb-1">
            <div className="col-md-2">
                <label className="form-label">{text}</label><br />
            </div>
            <div className="col-md-10">
                <input 
                    type={inputType} 
                    value={fieldValue} 
                    name={fieldName}  
                    placeholder={placeholderValue} 
                    className="form-control"  
                    onFocus={handleFocus} 
                    onChange={handleChange} 
                />
                { formErrors && <span className="text-danger">{formErrors}</span> }
                <br />
            </div>
        </div>
    )
}

export default InputField