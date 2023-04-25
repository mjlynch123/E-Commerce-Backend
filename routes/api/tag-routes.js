const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',  async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = req.params.id;
    const tags = await Tag.findByPk(tagId, {
      include: [Product]
    });
    if (!tags) {
      res.status(404).json({message: 'Tag not found'});
    } else {
      res.status(200).json(tags);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);

    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagId = req.params.id;

    const tag = await Tag.findByPk(tagId);
    if (!tag) {
      res.status(404).json({message: 'Tag not found'});
    } else {
      const updatedTag = await tag.update(req.body);
      res.status(200).json(updatedTag);
    }
  } catch {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const tagInstance = await Tag.findByPk(tagId); // Replace with the appropriate query method for your ORM
    if (!tagInstance) {
      return res.status(404).json({message: "Tag not found"});
    }
    await tagInstance.destroy();
    return res.status(200).json({message: "Tag deleted"})
  } catch(err) {
    console.error(err);
    return res.status(500).json({message: "Failed to delete tag"});
  }
});

module.exports = router;
