import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  const {value: firstNameValue, isValid: firstNameIsValid, hasError: firstNameHasError, valueChangeHandler: firstNameChangeHandler, valueBlurHandler: firstNameBlurHandler, resetValue: resetFirstName} = useInput((value) => value.trim() !== '');

  const {value: lastNameValue, isValid: lastNameIsValid, hasError: lastNameHasError, valueChangeHandler: lastNameChangeHandler, valueBlurHandler: lastNameBlurHandler, resetValue: resetLastName} = useInput((value) => value.trim() !== '');

  const { value: emailValue, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, resetValue: resetEmail } = useInput((value) => value.includes('@'));
  
  let formIsValid = false;
  
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return
    }
    console.log(firstNameValue, lastNameValue, emailValue)
    resetFirstName();
    resetLastName();
    resetEmail();
  }


  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameCLasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onBlur={firstNameBlurHandler} onChange={firstNameChangeHandler} />
          {firstNameHasError && <p className='error-text'>Please, enter valid first name</p>}
        </div>
        <div className={lastNameCLasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onBlur={lastNameBlurHandler} onChange={lastNameChangeHandler}/>
          {lastNameHasError && <p className='error-text'>Please, enter valid last name</p>}
      </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {emailHasError && <p className='error-text'>Please, input a valid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
