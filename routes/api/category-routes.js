const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const Cat_Data = await Category.findAll({
      include: [{model: Product}]
    });
    // console.log("GET-ALL request on Category DB. All tags are: ", Cat_Data);
    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const Cat_Data = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const Cat_Data = await Category.create(req.body);
    res.status(200).json(Cat_Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name,
    },
    {
      // Gets a category based on the category id given in the request parameters
      where: {
        id: req.params.id,
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

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const Cat_Data = await Category.destroy({
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
