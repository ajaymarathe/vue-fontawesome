# Vue Fontawesome Icon

🍺 **Vue Font Awesome Icons** - The ultimate Font Awesome icon solution for Vue.js developers!

[![NPM Version](https://img.shields.io/npm/v/vue-fontawesome-icon.svg)](https://www.npmjs.com/package/vue-fontawesome-icon)
[![Total Downloads](https://img.shields.io/npm/dt/vue-fontawesome-icon.svg)](https://www.npmjs.com/package/vue-fontawesome-icon)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 📦 Installation

Install the package using npm:

```bash
npm install vue-fontawesome-icon --save
npm install font-awesome --save
```

## 🚀 Quick Start

### Step 1: Import the required files in your main file (e.g., `main.js`):

```js
import Vue from 'vue';
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

// Register Vue Fontawesome component globally
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### Step 2: Use the icon component in your templates:
```js
<vue-fontawesome icon="file" size="2" color="lightgray"></vue-fontawesome>
```

## 📚 Features & Notes

![Vue Fontawesome Icon Example](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)

- **Easy-to-use icon name**: Use the Font Awesome icon name directly, e.g., `icon="file"`. There's no need to include the full class name like `fa fa-file`. 🚫

- **Props**:
  - `icon`: Set the Font Awesome icon name. Browse icons [here](https://fontawesome.com/v4.7.0/icons/).
  - `size`: Specify the icon size in `rem` units, e.g., `size="2"`.
  - `color`: Provide any valid CSS color value, such as `red`, `yellow`, `#ffffff`, or `#ff0000`.

## 👤 Author

Developed by **Ajay Marathe**.  
Feel free to explore more of my work:

- GitHub: [Ajay Marathe](https://github.com/ajaymarathe)

## 📄 License

This project is licensed under the [MIT License](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE).  
© 2019 - 2024 - [Ajay Marathe](https://github.com/ajaymarathe)

