const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const Cat_Data = await Category.findAll();
    console.log("GET-ALL request on Category DB. All tags are: ", Cat_Data);
    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const Cat_Data = await Category.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'Category_product' }]
    });

    if (!Cat_Data) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const Cat_Data = await Category.create(req.body);
    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      // Gets a category based on the book_id given in the request parameters
      where: {
        tag_id: req.params.id,
      },
    }
  )
    .then((Cat_Data) => {
      res.json(Cat_Data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const Cat_Data = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!Cat_Data) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
