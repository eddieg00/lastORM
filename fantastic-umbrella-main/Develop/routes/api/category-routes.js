const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })

    if(!categoryData) {
      res.status(404).json({message: "No category found with this ID!"})
    }

    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = Category.create(req.body)
    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = Category.update({
      category_name: req.body.category_name
    }, {
      where: {
        id: req.params.id
      }
    })

    if(!categoryData) {
      res.status(404).json({message: "No category found with this ID!"})
    }

    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {

  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
