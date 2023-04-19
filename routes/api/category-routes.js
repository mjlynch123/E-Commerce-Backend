const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all categories and include their associated Products
    const categories = await Category.findAll({
      // Include gets the associated product for that category
      include: [Product]
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    // Find the category by its id and include its associated Products
    const category = await Category.findByPk(categoryId, {
      include: [Product]
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new category using the request body
    const newCategory = await Category.create(req.body);

    // If you want to add associated products to the category, you can use the `setProducts` method.
    // For example, if you have an array of productIds in the request body, you can do something like this:
    // await newCategory.setProducts(req.body.productIds);

    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    // Find the category by its id
    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      // Update the category with the new data from the request body
      const updatedCategory = await category.update(req.body);
      res.status(200).json(updatedCategory);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    // Find the category by its id
    const category = await Category.findByPk(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      // Delete the category
      await category.destroy();
      res.status(200).json({ message: 'Category deleted' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
