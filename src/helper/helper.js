const shortenText = (title) => {
    return title.split(" ").slice(0, 3).join(" ")
}

const serachProduct = (products, search) => {
    if (!search) return products
    const searchedProducts = products.filter(item => item.title.toLowerCase().includes(search))
    return searchedProducts
}

const filterProducts = (products, category) => {
    if (!category) return products

    const filteredProducts = products.filter(item => item.category === category)

    return filteredProducts
}

const createQueryObject = (currentObject, newObject) => {
    if (newObject.category == 'all') {
        const { category, ...rest } = currentObject
        return rest
    }

    if (newObject.search === '') {
        const { search, ...rest } = currentObject
        return rest
    }

    return { ...currentObject, ...newObject }
}

const getInitialQuery = (searchParams) => {
    const query = {}

    const search = searchParams.get('search')
    const category = searchParams.get('category')

    if (search) query.search = search
    if (category) query.category = category

    return query
}

const sumProducts = (products) => {
    const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0)
    const total = products.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)

    return { itemsCounter, total };
}

const productQuantity = (products, id) => {
    const index = products.selectedItems.findIndex(item => item.id === id)

    if (index == -1) {
        return 0
    } else {
        return products.selectedItems[index].quantity
    }
}

export { shortenText, serachProduct, filterProducts, createQueryObject, getInitialQuery, sumProducts, productQuantity }