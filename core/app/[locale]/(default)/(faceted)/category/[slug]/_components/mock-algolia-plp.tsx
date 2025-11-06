'use client';

import { Configure, Index } from 'react-instantsearch';

function MockProductsView({ categoryId, urlSearchQuery }: { categoryId?: number, urlSearchQuery?: string }) {
    return (
        <div>
            <Index indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || ""}>
            <Configure
                query={urlSearchQuery || ""}
            />
            </Index>
        </div>
    )
}

export function MockAlgoliaPLP({ urlSearchQuery, categoryId }: { urlSearchQuery?: string, categoryId?: number }) {
    return (
        <MockProductsView categoryId={categoryId} urlSearchQuery={urlSearchQuery} />
    )
}