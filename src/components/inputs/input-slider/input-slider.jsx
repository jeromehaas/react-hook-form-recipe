 import './input-slider.scss';

const InputSlider = ({ className, id, label, defaultValue, errors, errorText, register, validation }) => {

    return (
        <div className={` ${ className ? className : '' } input-slider field `}>
            <label className="input-slider__label field__label label">{ label }</label>
            <input className="input-slider__input field__slider" type="range" defaultValue={ defaultValue } { ...register(id, validation )} />
            { errors[id] && <p className="input-slider__error field__error">{ errorText }</p> }
        </div>
    );

};

export default InputSlider;