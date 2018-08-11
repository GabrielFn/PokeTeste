export function isEmpty(value) {
    return value === undefined || value === null || value === '';
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}