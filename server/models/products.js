
const data = require("../data/products.json")

function getAll(){
    return data
}

function get(id) {
    return data.find((item) => item.id == id)
}

function create(item){
    const newItem = {
        id: data.length + 1,
        ...item
    }
    data.push(newItem)
    return newItem
}

function update(id, item){
    const index = data.findIndex((item) => item.id == id)
    if (index === -1){
        return null
    }
    const updateItem = {
        ...data[index],
        ...item
    }
    data[index] = updateItem
    return updatedItem
}

function remove(id){
    const index = data.findIndex((item) => item.id == id)
    data.items.splice(index)
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}