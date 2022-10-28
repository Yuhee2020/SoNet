
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
type FormikValuesType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const validate = (values: FormikValuesType) => {
    const errors: FormikErrorType = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 4) {
        errors.password = 'Must be mo then 4 symbols';
    }

    return errors;
};