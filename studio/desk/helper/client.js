import sanityClient from 'part:@sanity/base/client';

export const client = sanityClient.withConfig({ apiVersion: '2021-10-21' });