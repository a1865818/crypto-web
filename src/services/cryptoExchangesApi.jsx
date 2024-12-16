import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoExchangesHeader = {
    'x-rapidapi-key': import.meta.env.VITE_REACT_APP_CRYPTO_EXCHANGES_API_KEY,
    'x-rapidapi-host': import.meta.env.VITE_REACT_APP_CRYPTO_EXCHANGES_API_HOST
};

const baseUrl = import.meta.env.VITE_REACT_APP_CRYPTO_EXCHANGES_API_BASE_URL;
const createRequest = (url) => ({ url, headers: cryptoExchangesHeader });

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        getExchangeDetails: builder.query({
            query: (exchangeId) => createRequest(`/exchanges/${exchangeId}`),
        }),
    }),
});

export const { useGetCryptoExchangesQuery, useGetExchangeDetailsQuery } = cryptoExchangesApi;