const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/grocery/home', function (req, res) {
  res.render('v_grocery/grocery-home.ejs');
});

app.get('/restaurant/home', function (req, res) {
  res.render('v_restaurant/index.ejs');
});

app.get('/menu/home', function (req, res) {
  res.render('v_restaurant/menu.ejs');
});

app.get('/login', function (req, res) {
  res.render('v_authentication/login.ejs');
});

app.get('/register', function (req, res) {
    res.render('v_authentication/register.ejs');
  });

app.listen(3000, () => {
  console.log('server running on port 3000');
});
