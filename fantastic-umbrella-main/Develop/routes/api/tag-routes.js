const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(tagData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findByPk(req.params.id, {
      include: [ {model: Tag}]
    })

    if(!tagData) {
      res.status(404).json({message: "No tag found with this ID!"})
    }

    res.status(200).json(tagData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tagData = Tag.create(req.body)
    res.status(200).json(tagData)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    try {

  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
    try {

  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
