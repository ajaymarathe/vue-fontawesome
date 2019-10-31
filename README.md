# vue-fontawesome
🍺 Hi there, Font-awesome icons for Vue.js lovers <3

[![NPM](https://img.shields.io/npm/v/vue-fontawesome-icon.svg)](https://www.npmjs.com/package/vue-fontawesome-icon)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Installation
Using NPM:
```
npm i vue-fontawesome-icon

npm i font-awesome
```

## Usage
Import it in your main file `e.g main.js`
```js
import Vue from 'vue'

//import material-icon scss
import "font-awesome/css/font-awesome.min.css";

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/src/components/VueFontawesome.vue').default);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```

In your components template:
```html
  <vue-fontawesome icon="file" size="4" color="yellow"></vue-fontawesome>
```

## Note
[![vue-fontawesome](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)](https://github.com/ajaymarathe/vue-fontawesome)
- Add only name to icon, i.e `icon="file"`
- No need to add full name like i.e <del>`icon="fa fa-file"`</del>
- **icon** - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- **size** - icon size in `rem`.
- **color** - you can give any valid value `i.e red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
