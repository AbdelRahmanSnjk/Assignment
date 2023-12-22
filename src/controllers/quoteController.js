import axios from 'axios';

async function getRandomQuote(req, res) {
  try {
    const queryParams = extractQuoteQueryParams(req.query);
    const response = await axios.get(`${PATH}/quotes/random`, { params: queryParams });

    const quotes = Array.isArray(response.data) ? response.data : [response.data]

    res.json(quotes);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

function extractQuoteQueryParams(query) {
  const { limit, maxLength, minLength, tags, author } = query;
  return { limit, maxLength, minLength, tags, author };
}

const PATH = 'https://api.quotable.io';
export { getRandomQuote };