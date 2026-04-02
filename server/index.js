const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const customerRouter = require('./api/customer');
require('./utils/MongooseUtil');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
app.use('/api/admin', require('./api/admin'));
app.use('/api/customer', require('./api/customer'));
app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));
app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));
mongoose.connection.once('open', async () => {
  console.log(' DB name:', mongoose.connection.name);

  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log(' Collections:', collections.map(c => c.name));
});

// test API
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// test DB
app.get('/categories', async (req, res) => {
  const categories = await mongoose.connection
    .collection('categories')
    .find({})
    .toArray();
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
app.get('/admin/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
});
