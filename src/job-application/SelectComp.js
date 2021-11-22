import React from 'react'

const SelectComp = (props) => {
    const { text, fieldValue, fieldName, jobs, formErrors, handleFocus, handleChange } = props

    return (
        <div className="row mb-1">
            <div className="col-md-2">
                <label className="form-label">{text}</label><br />
            </div>
            <div className="col-md-10">
                <select 
                    value={fieldValue} 
                    name={fieldName} 
                    className="form-select" 
                    onFocus={handleFocus} 
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    { jobs.map((job,i) => {
                        return (
                            <option key={i} value={job}>{job}</option>
                        )
                    }) }
                </select>
                { formErrors && <span className="text-danger">{formErrors}</span> }
                <br />
            </div>
        </div>
    )
}

export default SelectComp