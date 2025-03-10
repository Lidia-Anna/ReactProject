import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => 'products',
            providesTags: (result = [], error, arg) => [
                { type: 'Products', id: 'LIST' },
                ...result.map(({ id }) => ({ type: 'Products', id })),
            ],
        }),

        getProductById: builder.query({
            query: (id) => `products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),

    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;