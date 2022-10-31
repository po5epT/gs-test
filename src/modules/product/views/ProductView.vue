<template>
  <AppLoader v-if="isLoading" class="fixed-loader" />

  <article class="page page_product" v-else>
    <h1 class="page__title">{{ product.name }}</h1>

    <div class="page__content">
      <div class="page__image">
        <img :src="product.imageUrl" :alt="product.name" />
      </div>

      <div class="page__details">
        <div class="page__description" v-html="product.description"></div>
        <div>Price: {{ product.price }}₽</div>
        <button
          class="page__button button button_success"
          @click.prevent="addToCart(product)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import AppLoader from "@/components/AppLoader.vue";

import { IProduct } from "@/modules/product/types";
import { getProductById } from "@/modules/product/api";
import { useCartStore } from "@/modules/cart/store";

export default defineComponent({
  name: "ProductView",

  components: { AppLoader },

  data() {
    return {
      isLoading: false,

      product: null as unknown as IProduct,
    };
  },

  methods: {
    ...mapActions(useCartStore, { addToCart: "add" }),

    async fetchProductById(productId: number) {
      try {
        this.isLoading = true;

        const { data: product } = await getProductById(this.$api, productId);
        this.product = product;
      } catch (err) {
        // console.log(err);
        // show notify
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.fetchProductById(Number(this.$route.params.id));
  },
});
</script>
