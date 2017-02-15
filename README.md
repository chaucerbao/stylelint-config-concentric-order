# stylelint-config-concentric-order
This Stylelint configuration validates the ordering of CSS properties according to [Concentric CSS]. It's highly recommended that you use this **in addition to** your own rules (or rules from another shareable configuration), since it is only concerned with one thing.

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
