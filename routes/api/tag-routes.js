const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const Tag_Data = await Tag.findAll();
    console.log("GET-ALL request on Tags DB. All tags are: ", Tag_Data);
    res.status(200).json(Tag_Data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const Tag_Data = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tag_product' }]
    });

    if (!Tag_Data) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(Tag_Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const Tag_Data = await Tag.create(req.body);
    res.status(200).json(Tag_Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      // Gets a tag based on the tag_id given in the request parameters
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then((Tag_Data) => {
      res.json(Tag_Data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const Tag_Data = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!Tag_Data) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(Tag_Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
