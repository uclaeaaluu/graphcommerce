// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://eu-central-1.cdn.hygraph.com/content/ckhx7xadya6xs01yxdujt8i80/master',
  magentoEndpoint: 'https://magento-dev.support2.ucla.edu/graphql',
  canonicalBaseUrl: 'https://ecommerce.ucla.edu',
  storefront: [
    { locale: 'en', magentoStoreCode: 'en_US', defaultLocale: true },
    { locale: 'nl', magentoStoreCode: 'nl_NL' },
  ],
  recentlyViewedProducts: {
    enabled: true,
  },
}

module.exports = config
