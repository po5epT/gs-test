<template>
  <div class="wrapper">
    <header class="header">
      <nav class="nav header__nav">
        <RouterLink class="nav__link" :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink class="nav__link cart-link" :to="{ name: 'cart' }">
          Cart

          <span v-if="itemsCount" class="cart-link__count">
            {{ itemsCount }}
          </span>
        </RouterLink>
      </nav>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useCartStore } from "@/modules/cart/store";

export default defineComponent({
  name: "DefaultLayout",

  computed: {
    ...mapState(useCartStore, ["itemsCount"]),
  },
});
</script>
