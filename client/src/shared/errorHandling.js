export const validateForm = (createFormValue, setErrorMessages) => {
    let hasErrors = false;
    const errors = {};

    // Validate username
    if (createFormValue.username.trim() === '') {
        errors.username = 'Username is required.';
        hasErrors = true;
    }

    // Validate age
    if (createFormValue.sectors === '') {
        errors.sectors = 'Sectors is required.';
        hasErrors = true;
    }

    if (!createFormValue.checked) {
        errors.checked = 'You must agree to the terms.';
        hasErrors = true;
    }

    // Update error messages state
    setErrorMessages(errors);
    return !hasErrors;
};
