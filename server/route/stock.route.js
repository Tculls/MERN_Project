
const StockController = require("./../controller/stock.controller.js")

module.exports = (app) =>{
    app.get("/apitest", StockController.testAPI)
    app.get("/api/stocks", StockController.allStocks)
    app.post("/api/stocks", StockController.addStock)
    app.get("/api/stocks/:id", StockController.oneStock)
    app.put("/api/stocks/:id",StockController.updateStock)
    app.delete("/api/stocks/:id", StockController.deleteStock)
}