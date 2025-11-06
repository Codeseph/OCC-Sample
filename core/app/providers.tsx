'use client';

import { PropsWithChildren } from 'react';

import { Toaster } from '@/vibes/soul/primitives/toaster';
import { SearchProvider } from '~/lib/search';
import { searchClient } from '~/lib/algolia-client';
import { InstantSearchNext } from 'react-instantsearch-nextjs'

export function Providers({ children }: PropsWithChildren) {
  return (
    <SearchProvider>
      <InstantSearchNext searchClient={searchClient}>
        <Toaster position="top-right" />
          {children}
      </InstantSearchNext>
    </SearchProvider>
  );
}
