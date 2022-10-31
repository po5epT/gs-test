<template>
  <div class="card card_category">
    <RouterLink :to="category.url" class="card__link">
      <div class="card__image">
        <img :src="category.thumbnailUrl" :alt="category.name" />
      </div>
      <div class="card__title">{{ category.name }}</div>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ICategory } from "../types";

export default defineComponent({
  name: "CategoryCard",

  props: {
    category: {
      type: Object as PropType<ICategory>,
      required: true,
    },
  },
});
</script>
