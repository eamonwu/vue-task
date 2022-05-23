import { defineStore } from "pinia";
export const useGoodsStore = defineStore('goods', {
    state() {
        return {
            data: []
        }
    },
    actions: {
        getData() {
            return this.data
        },
        setData(data) {
            this.data = data
        }
    }
})