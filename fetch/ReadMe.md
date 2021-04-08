Michael Max8:07 PM
sry mas telat tadi masi oh bahas soal
Red kowalsky8:08 PM
https://github.com/axios/axios
Red kowalsky8:12 PM
https://api.asklora.ai/api-universe/universe/?page_size=25&month=null&currency=USD&fields=ticker,ticker_name,ticker_fullname,country_code,latest_price,latest_price_change,currency,stock_image,wts_rating,dlp_1m,dlp_3m,fundamentals_quality,fundamentals_value,is_decimal,industry_group_code
Red kowalsky8:22 PM
1. fetch data yang ada di dalam results, masukkan ke array baru
Red kowalsky8:23 PM
2. jika di dalam data next ada value/url nya fetch url yang ada di dalam next dan ambil results nya lalu tambahkan ke dalam array baru
3. jika sudah 5x fetch next... stop fetch nilai yang ada di dalam next
Red kowalsky8:24 PM
4. console.log jumlah object data yang ada di array yang baru, dan apa saja ticker nya
Red kowalsky8:26 PM
5. format dari console.log jadi seperti ini:

{
data_count: jumlah_object_data_yg_ada,
data:[
ticker: ticker_yg_ada_dalam_data
]
}
Red kowalsky8:51 PM
https://docs.google.com/document/d/1lsB-sriO9ApZe5Kez_bnWiqBtanMUMUEQOwdSwT2D74/edit
ribonred@gmail.com
Red kowalsky8:59 PM
https://docs.google.com/presentation/d/1g0Bqr6goUWYg-H5dezkCswGdqpGjY16sd0HUhDC_kWA/edit#slide=id.gb99ec4fe92_1_3
https://docs.google.com/presentation/d/1LI5duLPpyKCe9HVhkht2_gCggd_8R2TjqwUFBvl7U10/edit#slide=id.gb99ec4fe92_1_3
https://docs.google.com/presentation/d/1ZVdelhRc6sCcSzaVB0qAI1GMPS5Bm4JoHDnAmQqwHpU/edit#slide=id.p