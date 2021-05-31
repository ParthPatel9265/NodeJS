const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const errorController = require('./controllers/error');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('60b4ae75169ffd3dd8708e7b')
    .then(user => {
      req.user = user;
      console.log(req.user);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(()=> {
  
//   app.listen(4000);
// });


mongoose
  .connect(
    'mongodb+srv://parth:parth@2912@cluster0.a5bgq.mongodb.net/shop?retryWrites=true&w=majority',{ useNewUrlParser: true }
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'parth',
          email: 'parthpatel9265@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(4000);
  })
  .catch(err => {
    console.log(err);
  });