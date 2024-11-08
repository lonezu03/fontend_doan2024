-- Tạo database mới

CREATE DATABASE ClothingStore;
GO

USE ClothingStore;
GO

-- Tạo các bảng chính
CREATE TABLE Gender (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Size (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Material (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Color (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Category (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Product (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    material_id INT,
    gender_id INT,
    FOREIGN KEY (material_id) REFERENCES Material(id),
    FOREIGN KEY (gender_id) REFERENCES Gender(id)
);

CREATE TABLE Variant (
    id INT PRIMARY KEY,
    product_id INT,
    color_id INT,
    size_id INT,
    category_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (color_id) REFERENCES Color(id),
    FOREIGN KEY (size_id) REFERENCES Size(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Image (
    id INT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    variant_id INT,
    FOREIGN KEY (variant_id) REFERENCES Variant(id)
);

CREATE TABLE Version (
    id INT PRIMARY KEY,
    variant_id INT,
    description TEXT,
    FOREIGN KEY (variant_id) REFERENCES Variant(id)
);

CREATE TABLE Purchase (
    id INT PRIMARY KEY,
    date DATE NOT NULL
);

CREATE TABLE Purchase_Item (
    id INT PRIMARY KEY,
    purchase_id INT,
    version_id INT,
    FOREIGN KEY (purchase_id) REFERENCES Purchase(id),
    FOREIGN KEY (version_id) REFERENCES Version(id)
);

CREATE TABLE Inventory (
    id INT PRIMARY KEY,
    variant_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (variant_id) REFERENCES Variant(id)
);
CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE Address (
    id INT PRIMARY KEY,
    user_id INT,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);



CREATE TABLE Role (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Permission (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE User_Role (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (role_id) REFERENCES Role(id)
);

CREATE TABLE Role_Permission (
    role_id INT,
    permission_id INT,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES Role(id),
    FOREIGN KEY (permission_id) REFERENCES Permission(id)
);
CREATE TABLE Shipping (
    id INT PRIMARY KEY,
    address_id INT,
    shipping_date DATE NOT NULL,
    FOREIGN KEY (address_id) REFERENCES Address(id)
);
CREATE TABLE Orders (
    id INT PRIMARY KEY,
	user_id INT,
    shipping_id INT,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (shipping_id) REFERENCES Shipping(id)
);



CREATE TABLE Order_Item (
    id INT PRIMARY KEY,
    order_id INT,
    inventory_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(id),
    FOREIGN KEY (inventory_id) REFERENCES Inventory(id)
);