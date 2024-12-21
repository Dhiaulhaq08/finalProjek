const express = require("express")
const app = express();
const c_login        = require('./controller/c_login')
const c_home         = require('./controller/c_home')
const c_tab          = require('./controller/c_table_products')
app.set("view engine", "ejs");
app.set('views', "./views")
app.use(express.urlencoded({ extended: true }));
app.use( express.static('public') )

app.get('/', c_home.halaman_home)
app.get('/inventory/products', c_tab.halaman_table_products)
app.get('/login', c_login.halaman_login)
app.post('/proses-login', c_login.proses_login)

app.listen(3000, ()=> {
    console.log("server running on port 3000");
})