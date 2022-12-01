import './input-select.scss';

const InputSelect = ({ className, id, label, register, errors, errorText, validation, defaultValue, options }) => {

    return (
        <div className={` ${ className ? className : '' } input-select field`}>
            <label className="input-select__label field__label">{ label }</label>
            <select className="input-select__input field__input input" name="" id="" defaultValue={ defaultValue } { ...register(id, validation )} >
                { options.map((option) => (
                    <option className="input__option" value= { option.value } key={ option.value }>{ option.label }</option>
                ))}
            </select>
            { errors[id] && <p className="input-select__error field__error">{ errorText }</p> }
        </div>
    );

};

export default InputSelect;