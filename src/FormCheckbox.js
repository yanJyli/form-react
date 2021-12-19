function FormCheckbox({ field, form, label }) {
    const { errors } = form;

    return <div>
        <input type="checkbox" name="business" id="business" />
        <label for="business ">{label}</label>
        {errors[field.name] ? <p>{errors[field.name]}</p> : null}
    </div>
}

export default FormCheckbox;