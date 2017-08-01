# stylelint-config-concentric-order
This [stylelint] configuration validates the order of CSS properties according to [Concentric CSS]. It's highly recommended that you use this **in addition to** your own rules (or rules from a shareable configuration), since it is only concerned with ordering.
The configuration works with both `stylelint --fix` and [stylefmt] to automatically sort your CSS properties.

## Installation
```sh
npm install --save-dev stylelint-config-concentric-order
```

## Usage
Add this configuration to the end of your `extends` array inside `.stylelintrc`

```javascript
{
  "extends": [
    // ...some other shareable Stylelint configuration
    "stylelint-config-concentric-order"
  ],

  "rules": {
    // ...your own custom rules and overrides
  }
}
```

[Concentric CSS]: http://rhodesmill.org/brandon/2011/concentric-css/
[stylelint]: https://stylelint.io/
[stylefmt]: https://github.com/morishitter/stylefmt/
