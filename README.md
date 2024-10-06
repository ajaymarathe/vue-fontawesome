# Vue FontAwesome Icons

The Ultimate Font Awesome Solution for Vue.js Developers!

[![NPM Version](https://img.shields.io/npm/v/vue-fontawesome-icon.svg)](https://www.npmjs.com/package/vue-fontawesome-icon)
[![Total Downloads](https://img.shields.io/npm/dt/vue-fontawesome-icon.svg)](https://www.npmjs.com/package/vue-fontawesome-icon)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Easily integrate Font Awesome icons into your Vue.js applications with this flexible and lightweight component!

## 📦 Installation

Install the necessary packages using npm:

```bash
npm install vue-fontawesome-icon --save
npm install font-awesome --save
```

## 🚀 Quick Start Guide

- **Step 1**: Import Font Awesome and register the component globally in your `main.js` (or similar entry file):

```javascript
import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

// Register the Vue FontAwesome component globally
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

- **Step 2**: 
Use the component in your templates:

```vue
<vue-fontawesome icon="file" size="2" color="red"></vue-fontawesome>
```
## 📚 Features & Highlights

- **Simple icon usage**: Just use the Font Awesome icon name, e.g., `icon="file"`. No need to add the full class like `fa fa-file`! 🚫

- **Fully customizable**: Adjust the size and color of the icons easily with props.

## 💡 Props

| Prop   | Type   | Description                                                                                   |
|--------|--------|-----------------------------------------------------------------------------------------------------------|
| icon   | String | Set the Font Awesome icon name (e.g., `"home"`, `"user"`, `"file"`). You can browse icons [here](https://fontawesome.com/icons). |
| size   | String | Specify the size of the icon (e.g., `"2"`, `"3"`), which corresponds to rem units.          |
| color  | String | Provide any valid CSS color value (e.g., `"red"`, `"yellow"`, `"#ffffff"`, `"#ff0000"`).      |

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Thanks ❤️

## License

MIT © [License](https://github.com/ajaymarathe/react-bootstrap-spinner/blob/master/LICENSE)

## Author
Made with ❤️ by [Ajay Marathe](https://github.com/ajaymarathe)

