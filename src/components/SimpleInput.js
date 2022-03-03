// import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, resetValue: resetNameInput} = useInput((value) => value.trim() !== '');

  const {value: enteredEmail, isValid: enteredEmailIsvalid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, resetValue: resetEmailInput} = useInput((value) => value.includes('@'));


  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsvalid) {
      formIsValid = true;
    }
 
  const formSubmissionHandler = event => {
    event.preventDefault()
  
    
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onBlur={nameBlurHandler} onChange={nameChangeHandler} />
        {nameInputHasError && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailInputHasError && (<p className='error-text'>Email must not be empty and must include @</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
