// import model
const {Stock} = require("./../model/stock.model")

module.exports.testAPI = (req,res) =>{
    res.json({message: "Backend Message"})
}

module.exports.allStocks = (req, res) => {
    Stock.find()
        .then(stocks => res.json(stocks))
        .catch(err=> res.json(err))
}

module.exports.addStock = (req, res) => {
    Stock.create(req.body)
        .then((newStock) => res.json(newStock))
        .catch((err)=> console.log(err));
};

module.exports.oneStock = (req, res) => {
    console.log(req)
    Stock.findOne({_id: req.params.id})
    .then(stock=>res.json(stock))
    .catch(err=>res.json(err))

}

module.exports.updateStock = (req, res) => {
    Stock.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
        )
        .then(stock=>res.json(stock))
        .catch(err=>res.json(err))
}

module.exports.deleteStock = (req,res) => {
    Stock.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json(err))
}