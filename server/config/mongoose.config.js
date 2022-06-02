const mongoose = require('mongoose');
// comment
mongoose.connect('mongodb://localhost/stock_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err=>console.log('Something went wrong when connecting to the database' , err));