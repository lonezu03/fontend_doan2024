drop database ClothingStore

CREATE DATABASE ClothingStore;
GO

USE ClothingStore;
GO

-- Tạo các bảng chính
CREATE TABLE Gender (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Size (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Material (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Color (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Category (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    material_id INT,
    gender_id INT,
    FOREIGN KEY (material_id) REFERENCES Material(id),
    FOREIGN KEY (gender_id) REFERENCES Gender(id)
);
CREATE TABLE Description (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(50)  ,
	content VARCHAR(200)  ,

);

CREATE TABLE Variant (
    id INT IDENTITY(1,1) PRIMARY KEY,
    product_id INT,
    color_id INT,
    size_id INT,
	description_id INT,
    category_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (color_id) REFERENCES Color(id),
    FOREIGN KEY (size_id) REFERENCES Size(id),
    FOREIGN KEY (category_id) REFERENCES Category(id),
	FOREIGN KEY (description_id) REFERENCES Description(id)
);

CREATE TABLE Image (
    id INT IDENTITY(1,1) PRIMARY KEY,
    url VARBINARY(MAX) NOT NULL,
    variant_id INT,
    FOREIGN KEY (variant_id) REFERENCES Variant(id)
);
select * from image
CREATE TABLE Inventory (
    id INT IDENTITY(1,1) PRIMARY KEY,
    variant_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (variant_id) REFERENCES Variant(id)
);

CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(50) NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Address (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    country VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Shipping (
    id INT IDENTITY(1,1) PRIMARY KEY,
    address_id INT,
    shipping_date DATE NOT NULL,
    FOREIGN KEY (address_id) REFERENCES Address(id)
);

CREATE TABLE Orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    shipping_id INT,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (shipping_id) REFERENCES Shipping(id)
);

CREATE TABLE Order_Item (
    id INT IDENTITY(1,1) PRIMARY KEY,
    order_id INT,
    inventory_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id),
    FOREIGN KEY (inventory_id) REFERENCES Inventory(id)
);
-- Thêm dữ liệu vào bảng Gender
INSERT INTO Gender (name) VALUES ('Male'), ('Female');

-- Thêm dữ liệu vào bảng Size
INSERT INTO Size (name) VALUES ('Small'), ('Medium'), ('Large');

-- Thêm dữ liệu vào bảng Material
INSERT INTO Material (name) VALUES ('Cotton'), ('Polyester'), ('Silk');

-- Thêm dữ liệu vào bảng Color
INSERT INTO Color (name) VALUES ('Red'), ('Blue'), ('Green');

-- Thêm dữ liệu vào bảng Category
INSERT INTO Category (name) VALUES ('T-Shirts'), ('Jeans'), ('Jackets');

-- Thêm dữ liệu vào bảng Product
INSERT INTO Product (name, material_id, gender_id) 
VALUES ('T-Shirt 1', 1, 1), ('Jacket 1', 2, 2);
select * from Product
-- Thêm dữ liệu vào bảng Variant
INSERT INTO Variant (product_id, color_id, size_id, category_id) 
VALUES (2, 1, 1, 1), (2, 2, 2, 2);
select * from Variant
-- Thêm dữ liệu vào bảng Image
INSERT INTO Image (url, variant_id)
VALUES (
    (SELECT * FROM OPENROWSET(BULK 'F:\Anh\me\anhvu.jpg', SINGLE_BLOB) AS img),
    9  -- variant_id, sử dụng id của Variant đã thêm
);
-- Thêm dữ liệu vào bảng Inventory
INSERT INTO Inventory (variant_id, quantity) 
VALUES (9, 100), (10, 50);

-- Thêm dữ liệu vào bảng Users
INSERT INTO Users (username, email, password) 
VALUES ('JohnDoe', 'john@example.com', 'password123'), ('JaneDoe', 'jane@example.com', 'password456');

-- Thêm dữ liệu vào bảng Address
INSERT INTO Address (user_id, address_line, city, country) 
VALUES (1, '123 Main St', 'New York', 'USA'), (2, '456 Park Ave', 'Los Angeles', 'USA');

-- Thêm dữ liệu vào bảng Shipping
INSERT INTO Shipping (address_id, shipping_date) 
VALUES (1, '2024-01-01'), (2, '2024-01-02');


-- Thêm dữ liệu vào bảng Orders
INSERT INTO Orders (user_id, shipping_id, date) 
VALUES (1, 1, '2024-01-03'), (2, 2, '2024-01-04');
select * from orders
select * from Inventory
-- Thêm dữ liệu vào bảng Order_Item
INSERT INTO Order_Item (order_id, inventory_id) 
VALUES (1, 4), (2, 5);





