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
Category.belongsToMany(Product, {
  foreignKey: 'category_id',
  as: 'Category'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'id',
  through: {
    model: ProductTag,
    unique: false,
    as: 'product_tag'
  }
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'id',
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
