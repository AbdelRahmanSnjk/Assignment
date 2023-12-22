document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quoteContainer');
    const generateButton = document.getElementById('generateButton');

    // Function to fetch and display a random quote or quotes
    async function getRandomQuote() {
        try {
            // Get values from the search boxes
            const limit = document.getElementById('limit').value;
            const maxLength = document.getElementById('maxLength').value;
            const minLength = document.getElementById('minLength').value;
            const tags = document.getElementById('tags').value;
            const author = document.getElementById('author').value;

            // Build query parameters
            const queryParams = {
                limit: limit || undefined,
                maxLength: maxLength || undefined,
                minLength: minLength || undefined,
                tags: tags || undefined,
                author: author || undefined,
            };

            const response = await fetch(`http://localhost:3000/quotes/generate?${getQueryString(queryParams)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const quotes = await response.json();

            // Display the quotes in the HTML
            quoteContainer.innerHTML = quotes.map(quote => `
          <div class="quote-item">
              <p><strong>${quote.content}</strong></p>
              <p>- ${quote.author}</p>
          </div>
      `).join('');
        } catch (error) {
            console.error('Error fetching quote:', error.message);
            quoteContainer.innerHTML = '<p>Error fetching quote. Please try again.</p>';
        }
    }

    // Fetch and display a random quote or quotes on page load
    getRandomQuote();

    // Add event listener for the "Generate Quote" button
    generateButton.addEventListener('click', getRandomQuote);
});

function getQueryString(params) {
    return Object.entries(params)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}