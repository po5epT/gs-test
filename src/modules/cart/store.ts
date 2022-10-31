import { defineStore } from "pinia";
import { IProduct } from "@/modules/product/types";

export interface ICartItems {
  id: number;
  product: IProduct;
}

export interface ICartState {
  items: ICartItems[];
}

export const useCartStore = defineStore("cart", {
  state: (): ICartState => ({
    items: [],
  }),

  getters: {
    itemsCount: (state) => state.items.length,
    hasItems: (state) => !!state.items.length,
  },

  actions: {
    add(product: IProduct) {
      this.items.push({
        id: Date.now(),
        product,
      });
    },

    remove(itemId: number) {
      this.items = this.items.filter(({ id }) => id !== itemId);
    },

    reset() {
      this.$reset();
    },
  },
});
