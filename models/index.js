// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
  as: 'product_category'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_name',
  as: 'Category'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // foreignKey: 'tag_name',
  through: {
    model: ProductTag,
    unique: false,
    as: 'product_tag'
  }
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // foreignKey: 'product_name',
  through: {
    model: ProductTag,
    unique: false,
    as: 'tag'
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
