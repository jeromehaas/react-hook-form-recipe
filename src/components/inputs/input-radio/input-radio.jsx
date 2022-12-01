
import './input-radio.scss';

const InputRadio = ({ className, id, label, errors, register, options, validation }) => {

    return (
        <div className={` ${ className ? className : '' }  input-radio field`} > 
            <label className="input-radio field__label">{ label }</label>
            <div className="input-radio field__option-container options">
                { options.map((option) => (
                    <div className="options__item item" key={ option.value }>
                        <input className="item__input" type="radio" { ...register(id, validation )} value={ option.value } defaultChecked={ option.defaultChecked } />
                        <label className="item__label">{ option.label }</label>
                    </div>
                ))}
                { errors[id] && <p className="field__error">Select a gender</p> }
            </div>
        </div>
    );

};

export default InputRadio;