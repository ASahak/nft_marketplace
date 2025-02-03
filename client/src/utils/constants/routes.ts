export const ROUTE_PATHS = {
  DASHBOARD: '/',
  CREATE: '/create',
  CREATE_NFT: '/create/nft',
  CREATE_CONTRACT: '/create/contract',
  COLLECTIONS: '/collections',
  SELLERS: '/sellers',
  COLLECTION: '/collection/{id}',
  SELLER: '/seller/{id}',
  TOP_COLLECTIONS: '/top-collections',
  TOP_SELLERS: '/top-sellers'
}

export const NAV_ITEMS = [
  {
    label: 'Explore',
    children: [
      { label: 'Top Collections', link: ROUTE_PATHS.TOP_COLLECTIONS },
      { label: 'Top Sellers', link: ROUTE_PATHS.TOP_SELLERS }
    ]
  },
  { label: 'Create', link: ROUTE_PATHS.CREATE }
]

export default ROUTE_PATHS
