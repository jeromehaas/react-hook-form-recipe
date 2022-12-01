import "./login-form.scss";
import { useForm } from "react-hook-form";
import InputText from "components/inputs/input-text/input-text";
import InputRadio from "components/inputs/input-radio/input-radio";
import InputPassword from "components/inputs/input-password/input-password";
import InputSelect from "components/inputs/input-select/input-select";
import InputDate from "components/inputs/input-date/input-date";
import InputFile from "components/inputs/input-file/input-file";
import InputSlider from "components/inputs/input-slider/input-slider";

const LoginForm = () => {

    // BRING IN HOOKS
    const { register, handleSubmit, getValues, watch, formState } = useForm();

    // GET VALUES FROM FORM AND WATCH CHANGES
    const values = getValues();
    watch(['resume']);

    // HANDLE DISPATCH
    const handleDispatch = () => {
        alert('success');
    };

    return (
        <form className="login-form form" onSubmit={ handleSubmit(handleDispatch) }>
            
            { /* GENDER */ }
            <InputRadio
                className="login-form__field"
                id="gender"
                label="Gender"
                defaultValue=""
                register={ register}
                errors={ formState.errors }
                errorText="Choose your gender"
                validation={{ validate: (value) => value !== "" }}
                options={[ 
                    { label: 'Mr' , value: 'm',  defaultChecked: true },
                    { label: 'Ms' , value: 'f' },
                ]}
             />

            { /* FIRSTNAME */ }
            <InputText 
                className="login-form__field"
                id="firstname"
                label="Firstname"
                defaultValue=""
                register={ register } 
                errors={ formState.errors }
                errorText="Enter your firstname"
                validation={{ validate: (value) => value !== "" }}
            />
            
             { /* LASTNAME */ }
            <InputText 
                className="login-form__field"
                id="lastname"
                label="Lastname"
                defaultValue=""
                register={ register } 
                errors={ formState.errors }
                errorText="Enter your lastname"
                validation={{ validate: (value) => value !== "" }}
            />

            { /* PASSWORD */ }
            <InputPassword 
                className="login-form__field"
                id="password"
                label="Password"
                defaultValue=""
                register={ register } 
                errors={ formState.errors }
                errorText="Enter your password"
                validation={{ validate: (value) => value !== "" }}
            />

            { /* COUNTRY */ }
            <InputSelect 
                className="login-form__field"
                id="country"
                label="Country"
                defaultValue=""
                register={ register }
                errors={ formState.errors }
                errorText="Please select your country"
                validation={{ validate: (value) => value !== "" }}
                options={[
                    { label: "Switzerland", value: "ch" },
                    { label: "Germany", value: "de" },
                    { label: "Austria", value: "aut" }
                ]}
            />

            { /* DATE OF BIRTH */ }
            <InputDate 
                className="login-form__field"
                id="date-of-birth"
                label="Date of birth"
                defaultValue=""
                register={ register }
                errors={ formState.errors }
                errorText="Please enter your birth date"
                validation={{ validate: (value) => value !== "" }}
             />

            { /* RESUME */ }
            <InputFile 
                className="login-form__field" 
                id="resume"
                label="Resume"
                defaultValue=""
                register={ register }
                errors={ formState.errors }
                errorText="Please append your resume"
                validation={{ validate: (value) => value.length !== 0 }}
                filename={ values.resume && values.resume[0]?.name}
            />
            
            { /* SALARY EXPECTATIONS */ }
            <InputSlider 
                classname="login-form__field"
                id="salary-expectations"
                label="Salary Expectations"
                defaultValue={ 0 }
                register={ register }
                errors={ formState.errors }
                errorText="Please enter your salary expectations"
            />

            { /* BUTTON */ }
            <button className="login-form__button form__button button" type="submit">Submit</button>

        </form>
    );

};

export default LoginForm;