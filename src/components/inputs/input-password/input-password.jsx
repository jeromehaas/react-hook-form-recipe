const InputPassword = ({ className, id, label, errors, defaultValue, validation, register, errorText }) => {

    return (
        <div className={` ${ className ? className : '' } input-password field `}>
            <label className="input-password__label field__label">{ label }</label>
            <input className="input-password__label field__input" type="password" defaultValue={ defaultValue } { ...register(id, validation )} />
            { errors[id] && <p className="input-password__error field__error">{ errorText }</p> }
        </div>
    );

};

export default InputPassword;