<template>
  <Component :is="layout"></Component>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/modules/cart/store";

const DEFAULT_LAYOUT_NAME = "DefaultLayout";
const CART_KEY = "cart";

export default defineComponent({
  name: "TheApp",

  components: {
    DefaultLayout,
  },

  setup() {
    const cartStore = useCartStore();
    cartStore.$subscribe((_, state) => {
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    });

    const loadedCart = localStorage.getItem(CART_KEY);
    if (loadedCart) {
      cartStore.$state = JSON.parse(loadedCart);
    }

    const route = useRoute();
    const layout = computed(() => route.meta.layout || DEFAULT_LAYOUT_NAME);

    return {
      layout,
    };
  },
});
</script>
