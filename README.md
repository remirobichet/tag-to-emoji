# tag-to-emoji
:dizzy: Transform emoji tag to emoji

## :gear: Installation

```sh
npm install tag-to-emoji
```

## :clipboard: Example

```js
const m = require("../lib");

let element = '<div>Hello :wave: World :earth_africa:!</div>';

console.log(m.parse(element));
// '<div>Hello 👋 World 🌍!</div>'
```

## :memo: Documentation

### `parse(el)`
Transform all `:emoji:` occurence by the unicode emoji.

#### Params

- **String** `el`: The string to parse.

#### Return
- **String** The transformed string.

## :page_facing_up: Licence

[MIT](./LICENSE).
