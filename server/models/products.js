
const { connect } = require('./supabase')
const data = require("../data/products.json")
const { CustomError, statusCodes } = require("./errors")

const isAdmin = true;

async function getAll(){
    const list = await connect().from(TABLE_NAME).select('*')
    if(list.error){
        throw error
    }
    return {
        items: list.data,
        total: list.count
    }
}

async function get(id) {
    const {data: item,error} = await connect().from(TABLE_NAME).select('*').eq('id', id)
        //data.items.find((item) => item.id == id)
    if( !item ){
        throw new CustomError("item not found", statusCodes.NOT_FOUND)
    }
    if(error){
        throw error
    }
    return item
}

async function search(query){
    const {data: items ,error} = (await connect().from(TABLE_NAME).select('*'))
    .or('title.ilike.%${query}%,description.ilike.%${query}%')
    if(error){
        throw error
    }
    return items
}

async function create(item){
    if(!isAdmin){
        throw CustomError("Sorry , you are not authorized to create a new item", 
            statusCodes.UNAUTHORIZED)
    }
    const {data: newItem, error } = await connect().from(TABLE_NAME).insert(item)
    if(error){
        throw error
    }
    return newItem
}

async function update(id, item){
    const { data: updatedItem, error } = await connect().from(TABLE_NAME).update()
    if(error){
        throw error
    }
    return updatedItem;
}

async function remove(id){
    const index = data.items.findIndex((item) => item.id == id)
    if (index === -1) {
        return null
    }
    const deletedItem = data.items[index]
    data.items.splice(index, 1)
    return deletedItem
}

async function seed() {
    for (const x of data.items) {
        const newItem = {
            x,
            shipping_information: x.shippingInformation,
            shippingInformation: undefined,
            availabilty_status: availabilityStatus,
        }
        const {data:newItems,errobr} = await connect().from(TABLE_NAME).insert(data.items)
    }
    if(error){
        throw error
    }
    return items
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    seed
}