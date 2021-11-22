import React, { useState } from 'react'
import validator from 'validator'
import axios from 'axios'

import InputField from './InputField'
import SelectComp from './SelectComp'
import TextAreaField from './TextAreaField'

const FormComp = (props) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ job, setJob ] = useState('')
    const [ experience, setExperience ] = useState('')
    const [ skills, setSkills ] = useState('')
    const [ formErrors, setFormErrors ] = useState({})
    const errors ={}
    const [ focus, setFocus ] = useState(true)

    const jobs = [ 'Front-End Developer', 'Node.js Developer','MEAN Stack Developer','FULL Stack Developer' ]

    const handleChange = (e) => {
        const attr = e.target.name
        if( attr === 'name' ){
            setName(e.target.value)
        }else if( attr === 'email' ){
            setEmail(e.target.value)
        }else if( attr === 'number' ){
            setNumber(e.target.value)
        }else if( attr === 'select' ){
            setJob(e.target.value)
        }else if( attr === 'experience' ){
            setExperience(e.target.value)
        }else if( attr === 'skills' ){
            setSkills(e.target.value)
            setFocus(false)
        }
    }

    const runValidations=() =>{
        if( name.trim().length === 0 ){
            errors.name ='Name Cannot be Blank'
        }else if( email.trim().length === 0 ){
            errors.email ='Email Cannot be Blank'
        }else if( !validator.isEmail(email.trim()) ){
            errors.email ='Invalid Email'
        }else if(number.trim().slice(3).length === 0){
            errors.number ='Number Cannot be Blank'
        }else if( !number.trim().includes('+91') ){
            errors.number ='+91 is not inculded'
        }else if( !validator.isMobilePhone(number.trim().split(' ').join(''),'en-IN',true)){
            errors.number ='Invalid Number'
        }else if( job.trim().length === 0 ){
            errors.select ='Select the Options'
        }else if( experience.trim().length === 0 ){
            errors.experience ='Provide Your experience'
        }else if( skills.trim().length === 0 ){
            errors.skills ='Provide your techanical skills'
        }  
    }

    const handleFocus=(e) =>{
        const attr=e.target.name
        if( attr === 'name' || attr === 'email' || attr === 'select'|| attr === 'experience' || attr === 'skills' ){
            setFormErrors({})
        }else if( attr === 'number'){
            if(focus){
                setNumber('+91 ')
                setFocus(!focus)
            }else if( number.length === 0 ){
                setNumber('+91 ')
            }else {
                setFormErrors({...formErrors.number =''})
            }
        }
    }

    const handleSubmit=(e) => {
        e.preventDefault()

        runValidations()
 
        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            const formData ={
                name:name,
                email:email,
                phone: number,
                skills: skills,
                jobTitle: job,
                experience:experience
            }

            axios.post('https://dct-application-form.herokuapp.com/users/application-form', formData)
                .then((response) => {
                    console.log(response.data)

                    alert('Sucessfully submitted the application form')

                    setName('')
                    setEmail('')
                    setNumber('')
                    setSkills('')
                    setJob('')
                    setExperience('')
                    setFocus(false)
                })
                .catch((err) => {
                    alert(err.message)
                })

        }else {
            setFormErrors(errors)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <InputField 
                text="Full Name" 
                inputType="text" 
                fieldValue={name} 
                fieldName="name" 
                formErrors={formErrors.name} 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />

            <InputField 
                text="Email Address" 
                inputType="text" 
                fieldValue={email} 
                fieldName="email" 
                placeholderValue="example@gmail.com" 
                formErrors={formErrors.email} 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />

            <InputField 
                text="Contact Number" 
                inputType="text" 
                fieldValue={number} 
                fieldName="number" 
                placeholderValue="+91 1234567891" 
                formErrors={formErrors.number} 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />

            <SelectComp 
                text="Applying For Job" 
                fieldValue={job} 
                jobs={jobs} 
                formErrors={formErrors.select} 
                fieldName="select" 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />

            <InputField 
                text="Experience" 
                inputType="text" 
                fieldValue={experience} 
                fieldName="experience" 
                placeholderValue="Experience (2 Years, 3 Months)" 
                formErrors={formErrors.experience} 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />
            
            <TextAreaField 
                text="Techanical Skills" 
                fieldValue={skills} 
                fieldName="skills" 
                placeholderValue="Techanical Skills" 
                formErrors={formErrors.skills} 
                handleFocus={handleFocus} 
                handleChange={handleChange} 
            />            

            <input 
                type="submit" 
                value="Send Application" 
                disabled={focus} 
                className="btn btn-primary" 
            />
        </form>
    )
}

export default FormComp