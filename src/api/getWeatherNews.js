export const getWeatherNews = async (country, setNews, signal) => {
  const response = fetch(
    `
    https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_KEY}`,
    { signal }
  );
  const news = await (await response).json();
  setNews(news);
};
