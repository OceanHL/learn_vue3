const App = {
  template: `#my-app`,
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128,
          count: 1,
        },
      ],
    };
  },
  computed: {
    totalPrices() {
      return this.books.reduce((pre, cur) => pre + cur.count * cur.price, 0);
    },
    // Vue3 不支持过滤器了，推荐两种做法：使用计算属性/使用全局的方法
    // 对响应式数据进行转换
    filterBooks() {
      return this.books.map((item) => {
        const newItem = Object.assign({}, item);
        newItem.price = '￥' + newItem.price;
        return newItem;
      });
    },
  },
  methods: {
    increment(index) {
      // 通过索引值获取到对象
      this.books[index].count++;
    },
    decrement(index) {
      if (this.books[index].count > 1) {
        this.books[index].count--;
      }
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    // 用【方法】实现【过滤器】
    formatPrice(price) {
      return '￥' + price;
    },
  },
};

Vue.createApp(App).mount('#app');
