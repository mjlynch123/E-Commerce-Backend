// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Update the foreign key to 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Update the foreign key to 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id', // Update the foreign key to 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id', // Update the foreign key to 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
