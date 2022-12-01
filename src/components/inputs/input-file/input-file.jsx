import './input-file.scss';

const InputFile = ({ className, id, label, register, defaultValue, validation, errors, errorText, filename }) => {

    return (
        <div className={` ${ className ? className : ''} input-file field`}>
            <label className="input-file__label field__label">{ label }</label>
            <input className="input-file__fake-input field__fake-input" type="file" id="file" name="file" { ...register(id, validation ) } filename={ filename } readOnly />
            <div className="input-file__input-container field__input-container input-container">
                <input className="input-container__input field__input" type="text" defaultValue={ defaultValue } placeholder={ filename } readOnly  />
                <label className="input-container__button field__button" htmlFor="file"></label>
            </div>
            { errors[id] && <p className="field__error">{ errorText }</p> }
        </div>
    );

};

export default InputFile;