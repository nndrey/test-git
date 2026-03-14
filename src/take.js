const take = (items, n = 1) => {
    const sizeItems = items.length
    if (sizeItems === 0 || n < 0) {
        return []
    }
    return items.filter((_, index) => index < n)
}

export default take