<template>
  <div class="card card_product">
    <RouterLink :to="product.url" class="card__link">
      <div class="card__image">
        <img :src="product.smallThumbnailUrl" :alt="product.name" />
      </div>
      <div class="card__title">{{ product.name }}</div>
    </RouterLink>
    <div class="card__price">{{ product.price }} ₽</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IProduct } from "../types";

export default defineComponent({
  name: "ProductCard",

  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true,
    },
  },
});
</script>
