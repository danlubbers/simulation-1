CREATE TABLE shelfie_products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER,
    image_url VARCHAR(500)
)



insert into shelfie_products (name, price, image_url) values ('Arcteryx: Alpha SV', '749','https://images-dynamic-arcteryx.imgix.net/S18/450x625/Alpha-SV-Jacket-Cardinal.png?auto=format');