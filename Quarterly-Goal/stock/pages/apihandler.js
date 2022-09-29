async function apihandler(fun, symbl) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=${fun}&${symbl}&apikey=HTKVDQLH7OJN894F`
    ).catch((err) => console.log("error", err));
    const StockItem = await res.json();
    return StockItem;
  } catch (error) {
    console.log(error);
  }
}

export default apihandler;
