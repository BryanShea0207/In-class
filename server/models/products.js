
const data = require("../data/products.json")

async function getAll(){
    return data.items
}

async function get(id) {
    const item = data.items.find((item) => item.id == id)
    if( !item )
        throw new Error("item not found", {status: 404})
}

async function create(item){
    const newItem = {
        id: data.items.length + 1,
        ...item
    }
    data.items.push(newItem)
    return newItem
}

async function update(id, item){
    const index = data.items.findIndex((item) => item.id == id)
    if (index === -1){
        return null
    }
    const updateItem = {
        ...data.items[index],
        ...item
    }
    data.items[index] = updateItem
    return updatedItem
}

async function remove(id){
    const index = data.items.findIndex((item) => item.id == id)
    if (index == -1) {
        return null
    }

    const deletedItem =
    data.items.splice(index)
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}