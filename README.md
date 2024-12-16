# Crypto Web Application

## Overview

Crypto Web Application is a comprehensive platform that provides real-time information on various cryptocurrencies, including their prices, market statistics, historical data, and news. The application also features a cryptocurrency savings calculator to help users plan their investments effectively.

## Features

- **Home Page**: Displays global cryptocurrency statistics and top 10 cryptocurrencies.
- **Cryptocurrencies**: Lists detailed information about various cryptocurrencies.
- **Exchanges**: Provides information about different cryptocurrency exchanges.
- **News**: Shows the latest news related to cryptocurrencies.
- **Calculator**: A tool to calculate potential savings in cryptocurrencies over a specified period.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management and API calls.
- **Ant Design**: For UI components.
- **Millify**: For formatting numbers.
- **Moment.js**: For date formatting.
- **HTMLReactParser**: For parsing HTML strings.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crypto-web.git
   cd crypto-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_REACT_APP_CRYPTO_API_KEY=your_crypto_api_key
   VITE_REACT_APP_CRYPTO_API_HOST=your_crypto_api_host
   VITE_REACT_APP_CRYPTO_API_BASE_URL=your_crypto_api_base_url
   VITE_REACT_APP_CRYPTO_NEWS_API_KEY=your_crypto_news_api_key
   VITE_REACT_APP_CRYPTO_NEWS_API_HOST=your_crypto_news_api_host
   VITE_REACT_APP_CRYPTO_NEWS_API_BASE_URL=your_crypto_news_api_base_url
   VITE_REACT_APP_CRYPTO_EXCHANGES_API_KEY=your_crypto_exchanges_api_key
   VITE_REACT_APP_CRYPTO_EXCHANGES_API_HOST=your_crypto_exchanges_api_host
   VITE_REACT_APP_CRYPTO_EXCHANGES_API_BASE_URL=your_crypto_exchanges_api_base_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
crypto-web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Calculator.jsx
│   │   ├── CryptoDetails.jsx
│   │   ├── Cryptocurrencies.jsx
│   │   ├── Exchanges.jsx
│   │   ├── HomePage.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── News.jsx
│   │   └── LineChart.jsx
│   ├── images/
│   │   └── cryptocurrency.png
│   ├── services/
│   │   ├── cryptoApi.jsx
│   │   ├── cryptoExchangesApi.jsx
│   │   └── cryptoNewsApi.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   └── routes.jsx
├── .env
├── package.json
└── README.md
```

## Usage

- **Home Page**: Provides an overview of global cryptocurrency statistics and links to detailed pages for cryptocurrencies and news.
- **Cryptocurrencies**: Displays a list of cryptocurrencies with their prices, market cap, and daily changes. Users can search for specific cryptocurrencies.
- **Exchanges**: Lists various cryptocurrency exchanges with details like trade volume, trust score, and rank.
- **News**: Shows the latest news articles related to cryptocurrencies.
- **Calculator**: Allows users to calculate potential savings in cryptocurrencies over a specified period.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Contact

If you have any questions or feedback, please feel free to contact me at [minhnt10122003@gmail.com].
