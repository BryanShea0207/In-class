CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descripton NOT NULL,
    catagory VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    rating NUMERIC(3,2),
    stock INT,
    tags TEXT[],
    brand VARCHAR(100),
    sku VARCHAR(50),
    weight
    dimensions JSONB,
    shipping_information
    availability_status
    return_policy
    minimum_order_quantity
    minimum_order_quantityimages
    thumbnail TEXT
),

CREATE TABLE products_reviews(
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id) ON DELETE CASCADE,
),

CREATE INDEX idx_products_catagory ON product
CREATE INDEX idx_products_tags ON products USING GIN(tags);
CREATE INDEX idx_products_reviews_product_id ON product_reviews(product_id);

CREATE TABLE orders(

),

CREATE TABLE order_item(
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id
),

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(50),
    age INT NOt NULL
)
