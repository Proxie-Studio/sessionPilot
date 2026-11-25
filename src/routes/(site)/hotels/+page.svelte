<script>
  import ProductPage from '#lib/components/ProductPage.svelte';
  import { products } from '#lib/data/products.js';
</script>

<ProductPage o={products.hotels} />
