<template>
  <AppLoader v-if="isLoading" class="fixed-loader" />

  <div v-else class="category page">
    <h1 class="page__title">Category "{{ category.name }}"</h1>

    <section class="section" v-if="hasSubCategories">
      <div class="section__title">Sub-categories</div>

      <div class="section__content">
        <CategoryCard
          v-for="category in subCategories"
          :key="category.id"
          :category="category"
          class="section__item category-card"
        />
      </div>
    </section>

    <section class="section" v-if="hasProducts">
      <div class="section__title">Products from sub-categories</div>

      <div class="section__content">
        <VueperSlides 3d fixed-height="400px" arrows-outside bullets-outside>
          <VueperSlide v-for="product in products" :key="product.id">
            <template #content>
              <ProductCard :product="product" class="section__item" />
            </template>
          </VueperSlide>
        </VueperSlides>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import CategoryCard from "../components/CategoryCard.vue";
import ProductCard from "@/modules/product/components/ProductCard.vue";
import AppLoader from "@/components/AppLoader.vue";

import { getCategories, getCategoryById } from "@/modules/category/api";
import { makeCategoryUrl, makeProductUrl } from "@/utils";
import { ICategory } from "@/modules/category/types";
import { IProduct } from "@/modules/product/types";
import { getProducts } from "@/modules/product/api";

export default defineComponent({
  name: "CategoryView",

  components: {
    ProductCard,
    AppLoader,
    CategoryCard,
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      isLoading: false,

      category: null as unknown as ICategory,
      subCategories: [] as ICategory[],
      products: [] as IProduct[],
    };
  },

  computed: {
    hasProducts(): number {
      return this.products.length;
    },

    hasSubCategories(): number {
      return this.subCategories.length;
    },
  },

  watch: {
    async subCategories() {
      const subCategoryIds = this.subCategories.map(({ id }) => id);
      const { data: { items: products = [] } = {} } = await this.fetchProducts(
        subCategoryIds
      );

      this.products = products.map(makeProductUrl);
    },
  },

  methods: {
    async fetchAll() {
      const categoryId = Number(this.$route.params.id);

      try {
        this.isLoading = true;
        const [
          { data: category = {} as ICategory },
          { data: { items: subCategories = [] } = {} },
        ] = await Promise.all([
          this.fetchCategoryById(categoryId),
          this.fetchSubCategories(categoryId),
        ]);

        this.category = category;
        this.subCategories = subCategories.map(makeCategoryUrl);
      } catch (err) {
        // console.log(err);
        // show notify
      } finally {
        this.isLoading = false;
      }
    },

    async fetchSubCategories(categoryId: number) {
      return getCategories(this.$api, {
        category: categoryId,
      });
    },

    async fetchCategoryById(categoryId: number) {
      return getCategoryById(this.$api, categoryId);
    },

    async fetchProducts(fromCategoryIds: number[] = []) {
      return getProducts(this.$api, {
        categories: fromCategoryIds,
      });
    },
  },

  created() {
    this.fetchAll();
  },
});
</script>
