import lazyLoading from './lazyLoading'

export default {
  path: '/ecommerce',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false,
    label: 'Ecommerce'
  },
  component: lazyLoading('ecommerce', true),

  children: [
    {
      // name: 'ListProducts',
      path: 'products',
      component: lazyLoading('ecommerce/ProductList'),
      meta: {
        label: 'List My Products',
        link: 'ecommerce/ProductList.vue'
      }
    },
    {
      name: 'EditProduct',
      path: 'products/:id/edit',
      props: true,
      component: lazyLoading('ecommerce/ProductEdit'),
      meta: {
        label: 'Edit Product',
        link: 'ecommerce/ProductEdit.vue'
      }
    }
  ]
}
