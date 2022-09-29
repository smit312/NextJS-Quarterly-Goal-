async function apihandler(fun, symbl) {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=${fun}&${symbl}&apikey=HTKVDQLH7OJN894F`
    );
    const StockItem = await res.json();
    return StockItem;
  } catch (error) {
    return { error: "Something went wrong!" };
  }
}

export default apihandler;
