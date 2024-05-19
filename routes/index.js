const express = require('express');
const router = express.Router();

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Get semua items
router.get('/items', (req, res) => {
  res.json(items);
});

// Get item berdasarkan ID
router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Tambah item baru
router.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Hapus item berdasarkan ID
router.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.status(204).send();
});

module.exports = router;

