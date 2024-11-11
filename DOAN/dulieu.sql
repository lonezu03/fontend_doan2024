select * from product
-- 1. Thêm dữ liệu vào bảng Gender
INSERT INTO Gender (id, name) VALUES
(1, 'Nam'),
(2, 'Nữ'),
(3, 'Unisex');

-- 2. Thêm dữ liệu vào bảng Size
INSERT INTO Size (id, name) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL');

-- 3. Thêm dữ liệu vào bảng Material
INSERT INTO Material (id, name) VALUES
(1, 'Cotton'),
(2, 'Lụa'),
(3, 'Kaki'),
(4, 'Jean');

-- 4. Thêm dữ liệu vào bảng Color
INSERT INTO Color (id, name) VALUES
(1, 'Đỏ'),
(2, 'Xanh'),
(3, 'Vàng'),
(4, 'Đen');

-- 5. Thêm dữ liệu vào bảng Category
INSERT INTO Category (id, name) VALUES
(1, 'Áo phông'),
(2, 'Áo sơ mi'),
(3, 'Quần'),
(4, 'Váy');

-- 6. Thêm dữ liệu vào bảng Product
INSERT INTO Product (id, name, material_id, gender_id) VALUES
(1, 'Áo phông cotton nam', 1, 1),
(2, 'Áo sơ mi lụa nữ', 2, 2),
(3, 'Quần jean nam', 4, 1),
(4, 'Váy lụa nữ', 2, 2);

-- 7. Thêm dữ liệu vào bảng Variant
INSERT INTO Variant (id, product_id, color_id, size_id, category_id) VALUES
(1, 1, 1, 2, 1),
(2, 2, 2, 3, 2),
(3, 3, 4, 4, 3),
(4, 4, 3, 1, 4);

-- 8. Thêm dữ liệu vào bảng Image
INSERT INTO Image (id, url, variant_id) VALUES
(1, 'image1.jpg', 1),
(2, 'image2.jpg', 2),
(3, 'image3.jpg', 3),
(4, 'image4.jpg', 4);

-- 9. Thêm dữ liệu vào bảng Version
INSERT INTO Version (id, variant_id, description) VALUES
(1, 1, 'Version 1 - Áo phông cotton nam'),
(2, 2, 'Version 1 - Áo sơ mi lụa nữ'),
(3, 3, 'Version 1 - Quần jean nam'),
(4, 4, 'Version 1 - Váy lụa nữ');

-- 10. Thêm dữ liệu vào bảng Purchase
INSERT INTO Purchase (id, date) VALUES
(1, '2023-01-01'),
(2, '2023-02-01');

-- 11. Thêm dữ liệu vào bảng Purchase_Item
INSERT INTO Purchase_Item (id, purchase_id, version_id) VALUES
(1, 1, 1),
(2, 2, 2);

-- 12. Thêm dữ liệu vào bảng Inventory
INSERT INTO Inventory (id, variant_id, quantity) VALUES
(1, 1, 100),
(2, 2, 50),
(3, 3, 150),
(4, 4, 75);

-- 13. Thêm dữ liệu vào bảng Users
INSERT INTO Users (id, username, email, password) VALUES
(1, 'user1', 'user1@example.com', 'password1'),
(2, 'user2', 'user2@example.com', 'password2');

-- 14. Thêm dữ liệu vào bảng Address
INSERT INTO Address (id, user_id, address_line, city, state, postal_code, country) VALUES
(1, 1, '123 Main St', 'Hanoi', 'Hanoi', '10000', 'Vietnam'),
(2, 2, '456 Elm St', 'Saigon', 'HCMC', '70000', 'Vietnam');

-- 15. Thêm dữ liệu vào bảng Role
INSERT INTO Role (id, name) VALUES
(1, 'Admin'),
(2, 'Customer');

-- 16. Thêm dữ liệu vào bảng Permission
INSERT INTO Permission (id, name) VALUES
(1, 'Read'),
(2, 'Write'),
(3, 'Delete');

-- 17. Thêm dữ liệu vào bảng User_Role
INSERT INTO User_Role (user_id, role_id) VALUES
(1, 1),
(2, 2);

-- 18. Thêm dữ liệu vào bảng Role_Permission
INSERT INTO Role_Permission (role_id, permission_id) VALUES
(1, 1),
(1, 2),
(2, 1);

-- 19. Thêm dữ liệu vào bảng Shipping
INSERT INTO Shipping (id, address_id, shipping_date) VALUES
(1, 1, '2023-03-01'),
(2, 2, '2023-03-02');

-- 20. Thêm dữ liệu vào bảng Orders
INSERT INTO Orders (id, user_id, shipping_id, date) VALUES
(1, 1, 1, '2023-04-01'),
(2, 2, 2, '2023-04-02');

-- 21. Thêm dữ liệu vào bảng Order_Item
INSERT INTO Order_Item (id, order_id, inventory_id) VALUES
(1, 1, 1),
(2, 2, 2);


