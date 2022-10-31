<template>
  <div class="page page_cart">
    <h1>My Cart</h1>

    <div class="cart">
      <div v-if="success" class="cart__success-text">
        Thank you! You have successfully placed your order!
      </div>

      <template v-if="hasItems">
        <ul class="cart__items">
          <li class="cart__item" v-for="item in items" :key="item.id">
            {{ item.product.name }} (#{{ item.product.id }})

            <button
              class="button button_danger"
              @click.prevent="removeFromCart(item.id)"
            >
              Remove &times;
            </button>
          </li>
        </ul>

        <button
          class="page__button button button_success"
          @click.prevent="checkOut"
        >
          Check out
        </button>
      </template>

      <p v-else>Cart is empty</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useCartStore } from "@/modules/cart/store";

export default defineComponent({
  name: "CartView",

  data() {
    return {
      success: false,
    };
  },

  computed: {
    ...mapState(useCartStore, ["items", "hasItems"]),
  },

  methods: {
    ...mapActions(useCartStore, {
      removeFromCart: "remove",
      resetCart: "reset",
    }),

    checkOut() {
      this.success = true;
      this.resetCart();
    },
  },
});
</script>
