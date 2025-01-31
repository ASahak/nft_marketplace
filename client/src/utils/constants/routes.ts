export const NAV_ITEMS = [
  {
    label: 'Explore',
    children: [
      { label: 'Top Collections', link: '/top-collections' },
      { label: 'Top Sellers', link: '/top-sellers' }
    ]
  },
  { label: 'Create', link: '/create' }
]

export default {
  DASHBOARD: '/',
  CREATE: '/create',
  COLLECTIONS: '/collections',
  SELLERS: '/sellers',
  COLLECTION: '/collection/{id}',
  SELLER: '/seller/{id}'
}
