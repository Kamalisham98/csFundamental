const axios = require("axios").default;

let newArray = [];
 let i = 0;
let count = 0;
let link =
  "https://api.asklora.ai/api-universe/universe/?page_size=25&month=null&currency=USD&fields=ticker,ticker_name,ticker_fullname,country_code,latest_price,latest_price_change,currency,stock_image,wts_rating,dlp_1m,dlp_3m,fundamentals_quality,fundamentals_value,is_decimal,industry_group_code";

function fetch(link) {
  axios
    .get(link)
    .then((res) => {
      if (i < 5) {
        res.data.results.map((element) => {
          newArray.push({ ticker: element.ticker });
          count++;
        });
        i++;
        fetch(res.data.next);
      } else {
        console.log(newArray);
        console.log("count = "+count);
      }
    })
    .catch();
}

fetch(link);

//------------- using async await-----------
// async function getUser(){
//   try {
    
//   } catch (error) {
    
//   }
// }