# vue-fontawesome
🍺 Hi there, Font-awesome icons for Vue.js lovers <3


## Installation
Using NPM:
```
npm install vue-fontawesome

npm i font-awesome
```

In your main.js file import font-awesome css
```
import "font-awesome/css/font-awesome.min.css";

```
or you can direct give cdn link to your root index.html file.


## Usage
Import direct in your .vue file:
```js
<script>
// @ is an alias to /src

import VueFontawesome from "vue-fontawesome/src/components/VueFontawesome.vue";

export default {
  name: "home",
  components: {
    VueFontawesome
  }
};
</script>
```

In your components template:
```html
  <vue-fontawesome icon="file" size="4" color="yellow"></vue-fontawesome>
```
## Note
- icon - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- size - icon size in rem.
- color - you can give any valid value i.e red, yellow, #fffff, #ff0000.
