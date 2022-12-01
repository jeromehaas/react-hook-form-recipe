const InputText = ({ className, id, label, errors, defaultValue, validation, register, errorText }) => {

    return (
        <div className={` ${ className ? className : '' } input-text field `}>
            <label className="input-text__label field__label">{ label }</label>
            <input className="input-text__label field__input" type="text" defaultValue={ defaultValue } { ...register(id, validation )} />
            { errors[id] && <p className="input-text__error field__error">{ errorText }</p> }
        </div>
    );

};

export default InputText;