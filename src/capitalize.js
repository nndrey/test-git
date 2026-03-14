const capitlize = (world) => {
    if (world === '') return ''
    const [firstChar, ...restChar] = world
    return `${firstChar.toUpperCase()}${restChar.join('')}`
}

export default capitlize