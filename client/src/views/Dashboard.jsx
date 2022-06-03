import React from 'react';
import {useEffect, useState, useParams} from "react";
import axios from "axios";
import TwelveData from "twelvedata";



const Dashboard = () => {
    const TwelveData = require("twelvedata")
    const [stocks, setStocks] = useState([])
    const config = {
        key: "bef906f480804f6499671ac7acc4854e"
    };
    const client = TwelveData(config);
    let params = {
        symbol: "AAPL",
        interval: "1min",
        outputsize: 5,
    };
    client
    .timeSeries(params)
    .then((data) =>{

    })
    .catch((error) =>{

    });
    // useEffect(() => {
    //     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=5KJPN7RQH39HLT5N`)
    //     .then(response=>{
    //         console.log(response.data)
    //         setStocks(response.data)
    //     })
    //     .catch(err=> console.log(err))
    // })

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
                        stocks.map((stock, i) =>{
                            <div key={i}/>
                        })
                    }
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

//  TwelveData bef906f480804f6499671ac7acc4854e