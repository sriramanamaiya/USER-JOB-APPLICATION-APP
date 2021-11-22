import React from "react";

const TextAreaField = (props) => {
    const { text, fieldValue, fieldName, placeholderValue, formErrors, handleFocus, handleChange } = props

    return (
        <>
            <div className="row mb-1">
                <div className="col-md-2">
                    <label className="form-label">{text}</label><br />
                </div>
                <div className="col-md-10">
                    <textarea 
                        value={fieldValue} 
                        name={fieldName} 
                        placeholder={placeholderValue} 
                        className="form-control" 
                        onFocus={handleFocus} 
                        onChange={handleChange}
                    ></textarea>
                    { formErrors && <span className="text-danger">{formErrors}</span> }
                    <br/>
                </div>
            </div>
        </>
    )
}

export default TextAreaField