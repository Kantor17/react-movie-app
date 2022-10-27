import { BASE_URL } from 'API/constants';
import { rest } from 'msw';
import { mockedDetailsResponse, mockedSearchResponse } from './mockedData';

export const handlers = [
  rest.get(`${BASE_URL}/search/movie`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedSearchResponse));
  }),
  rest.get(`${BASE_URL}/movie/152532`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedDetailsResponse));
  }),
];
