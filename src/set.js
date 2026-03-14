const set = (obj, key, value) => {
    if (Object.hasOwn(obj, key)) {
        return null;
    }
    return obj[key] = value
}

export default set