import './input-date.scss';

const InputDate = ({ className, id, register, label, errors, errorText, defaultValue, validation }) => {

    return (
        <div className={` ${ className ? className : '' } input-date field`}>
            <label className="input-date__label field__label">{ label }</label>
            <input className="input-date__input field__input" type="date" defaultValue={ defaultValue } { ...register(id, validation) }  />
            { errors[id] && <p className="field__error">{ errorText }</p> }
        </div>
    );

};

export default InputDate;