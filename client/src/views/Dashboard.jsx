import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";



const Dashboard = () => {
    const [stocks, setStocks] = useState([])

    // useEffect(() => {
    //     axios.get(`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=GOA2gwM2LCoC6JYQdpsMqVD8saUaaFmruAxMfN5c`)
    //     .then(response=>{
    //         console.log(response.data)
    //         setStocks(response.data)
    //     })
    //     .catch(err=> console.log(err))
    // }, [])

        return (
            <div className="App">
                <header className="">
                    <h1 className="title">EquityEvaluator</h1>
                    <form class="search" action="">
                        <input type="text" placeholder="Enter Symbol or Name" name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    <div className="favorites">
                        <h4>Favorite tickers</h4>
                    </div>
                </header>
                <h2>Indicies today</h2>
                <div className="main">
                    <div className="box1">
                        <h4>Dow Jones</h4>
                        {
                        stocks.map((stock, i )=> (
                            <div key={i}>
                            <p>{stock.symbol}</p>
                            <p>{stock.grossProfit}</p>
                        
                        </div>
                        ))}
                    </div>
                    <div className="box2">
                        <h4>S&P 500</h4>
                    </div>
                    <div className="box3">
                        <h4>Dow Jones</h4>
                    </div>
                </div>
    <script type="module" src="./app.js"></script>
            </div>
            
        );
    }
    



export default Dashboard

//  TwelveData bef906f480804f6499671ac7acc4854e API KEY 1 completely cooked for 140 days
// # 2 285759c7ba3643eeafe2303fe3e5e88c