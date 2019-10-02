# vue-fontawesome
🍺 Hi there, Font-awesome icons for Vue.js lovers <3


## Installation
Using NPM:
```
npm i vue-fontawesome-icon

npm i font-awesome
```

In your main.js file import font-awesome css
```
import "font-awesome/css/font-awesome.min.css";
//or you can direct give cdn link to your root index.html file.
```

## Usage
Import direct in your .vue file:
```js
<script>
//import your font-awesome component
import VueFontawesome from "vue-fontawesome/src/components/VueFontawesome.vue";

export default {
  name: "home",
  components: {
    //here define font-awesome component
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
- add only name to icon, i.e `icon="file"`
- no need to add full name like i.e `icon="fa fa-file"`
- icon - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- size - icon size in `rem`.
- color - you can give any valid value `i.e red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
