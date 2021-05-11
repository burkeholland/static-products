<template>
  <div id="home">
    <header>
      <div class="container">
        <div class="hero is-info is-bold">
          <div class="hero-body">
            <h1 class="is-size-1">Products</h1>
          </div>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="container">
        <div>
          <table class="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th class="has-text-centered">Units in Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.name">
                <td>
                  <label for="" class="label" type="text">
                    {{ product.name }}
                  </label>
                </td>
                <td>
                  <label for="" class="label"> {{ product.brand.name }} </label>
                </td>
                <td>
                  <label for="" class="label"> {{ product.price }} </label>
                </td>
                <td>
                  <label for="" class="label has-text-centered">
                    {{ product.stockUnits }}
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="has-text-centered" v-show="products.length < 1">
            <h2 class="is-size-4 has-text-info">Loading...</h2>
          </div>
        </div>
        <!-- <div id="toast" v-show="toast.show" class="container">
          <h2 class="is-size-5 has-text-white">Unable to reach API</h2>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const result = await fetch(`/api/GetProducts`);
    this.products = await result.json();
  },
};
</script>
