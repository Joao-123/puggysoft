-- ******* SCHEMAS *******
INSERT INTO storage_schema (name, short_name, created_by, tenant) VALUES ("Laptops", "LAPTOP", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema (name, short_name, created_by, tenant) VALUES ("Clientes", "CLIENTE", "SysStorageEncargado", "EMPRESA_1");

-- ******* FIELDS *******
-- LAPTOP
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Marca", "MARCA", "TEXTBOX", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Modelo", "MODELO", "TEXTBOX", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Pulgadas", "PULGADAS", "NUMBER", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Memoria ram", "RAM", "NUMBER", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Fecha de compra", "FECHA_COMPRA", "DATE", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Detalles", "DETALLES", "TEXTAREA", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Procesador Version", "PRO_VERSION", "DROPDOWN", "[{ label: '64bits', value: '64bit'}, { label: '32bits', value: '32'}]", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Precio de compra", "PRECIO_COMPRA", "NUMBER", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Precio de venta", "PRECIO_VENTA", "NUMBER", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Stock", "STOCK", "NUMBER", null, "SysStorageEncargado", "EMPRESA_1");
-- CLIENTE
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Nombres", "NOMBRES", "TEXTBOX", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("Apellidos", "APELLIDOS", "TEXTBOX", null, "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_field (name, short_name, type, textbox_option, created_by, tenant) VALUES ("NIT/CI", "NIT_CI", "TEXTBOX", null, "SysStorageEncargado", "EMPRESA_1");

-- ******* ATTRIBUTES BELONG TO SCHEMA *******
-- LAPTOP
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "MARCA", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "MODELO", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "PULGADAS", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "RAM", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "FECHA_COMPRA", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "PRO_VERSION", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "PRECIO_COMPRA", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "PRECIO_VENTA", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("LAPTOP", "STOCK", "SysStorageEncargado", "EMPRESA_1");
-- CLIENTE
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("CLIENTE", "NOMBRES", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("CLIENTE", "APELLIDOS", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_schema_field(schema_, field, created_by, tenant) VALUES ("CLIENTE", "NIT_CI", "SysStorageEncargado", "EMPRESA_1");


-- ******* RECORDS *******
-- PREFIX: {SCHEMA_NAME}_RECORD_{ID} OF THE RECORD. CREATE AND UPDATED IT.
-- LAPTOP
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "LAPTOP", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "LAPTOP", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "LAPTOP", "SysStorageEncargado", "EMPRESA_1");
-- CLIENTE
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("CLIENTE_RECORD_1", "CLIENTE", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("CLIENTE_RECORD_2", "CLIENTE", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_record(short_name, schema_, created_by, tenant) VALUES ("CLIENTE_RECORD_3", "CLIENTE", "SysStorageEncargado", "EMPRESA_1");


-- ******* DATA *******
-- LAPTOPS
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "MARCA", "Toshiba", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "MODELO", "Qosmio", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "PULGADAS", "17", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "RAM", "16", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "FECHA_COMPRA", "2023-05-26", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "PRO_VERSION", "64bits", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "PRECIO_COMPRA", "3000", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "PRECIO_VENTA", "7000", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_1", "STOCK", "50", "SysStorageEncargado", "EMPRESA_1");

INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "MARCA", "HP", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "MODELO", "Omen", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "PULGADAS", "17", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "RAM", "32", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "FECHA_COMPRA", "2023-05-26", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "PRO_VERSION", "64bits", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "PRECIO_COMPRA", "3500", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "PRECIO_VENTA", "8000", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_2", "STOCK", "50", "SysStorageEncargado", "EMPRESA_1");

INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "MARCA", "Apple", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "MODELO", "Macbook Pro", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "PULGADAS", "16", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "RAM", "16", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "FECHA_COMPRA", "2023-05-26", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "PRO_VERSION", "64bits", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "PRECIO_COMPRA", "8000", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "PRECIO_VENTA", "14000", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("LAPTOP_RECORD_3", "STOCK", "50", "SysStorageEncargado", "EMPRESA_1");
-- CLIENTES
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_1", "NOMBRES", "Juan Fernando", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_2", "APELLIDOS", "Perez del Corral", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_3", "NIT_CI", "44114477", "SysStorageEncargado", "EMPRESA_1");

INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_1", "NOMBRES", "Sara Teresa", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_2", "APELLIDOS", "Sanchez del Pinar", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_3", "NIT_CI", "55447788", "SysStorageEncargado", "EMPRESA_1");

INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_1", "NOMBRES", "Julieta", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_2", "APELLIDOS", "Ponce de Leon", "SysStorageEncargado", "EMPRESA_1");
INSERT INTO storage_data(record, field, field_value, created_by, tenant) VALUES ("CLIENTE_RECORD_3", "NIT_CI", "77551144", "SysStorageEncargado", "EMPRESA_1");