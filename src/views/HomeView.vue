<template>
  <AppLoader v-if="isLoading" class="fixed-loader" />

  <div v-else class="home page">
    <section class="section">
      <div class="section__title">Products</div>

      <div class="section__content">
        <VueperSlides 3d fixed-height="400px" arrows-outside bullets-outside>
          <VueperSlide v-for="product in products" :key="product.id">
            <template #content>
              <ProductCard :product="product" />
            </template>
          </VueperSlide>
        </VueperSlides>
      </div>
    </section>

    <section class="section">
      <div class="section__title">Categories</div>

      <div class="section__content">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import CategoryCard from "@/modules/category/components/CategoryCard.vue";
import ProductCard from "@/modules/product/components/ProductCard.vue";
import AppLoader from "@/components/AppLoader.vue";

import { makeCategoryUrl, makeProductUrl } from "@/utils";
import { getCategories } from "@/modules/category/api";
import { getProducts } from "@/modules/product/api";
import { ICategory } from "@/modules/category/types";
import { IProduct } from "@/modules/product/types";

export default defineComponent({
  name: "HomeView",

  components: {
    AppLoader,
    CategoryCard,
    ProductCard,
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      isLoading: false,

      categories: [] as ICategory[],
      products: [] as IProduct[],
    };
  },

  methods: {
    async fetchAll() {
      try {
        this.isLoading = true;
        const [
          { data: { items: categories = [] } = {} },
          { data: { items: products = [] } = {} },
        ] = await Promise.all([this.fetchCategories(), this.fetchProducts()]);

        this.categories = categories.map(makeCategoryUrl);
        this.products = products.map(makeProductUrl);
      } catch (err) {
        // console.log(err);
        // show notify
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCategories() {
      return getCategories(this.$api);
    },

    async fetchProducts() {
      return getProducts(this.$api);
    },
  },

  created() {
    this.fetchAll();
  },
});
</script>
