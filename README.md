# Rewire create-inferno-app to use MobX

# Install

```bash
$ npm install --save mobx inferno-mobx inferno-app-rewire-mobx
```

# Add it to your project

* [Rewire your app](https://github.com/steveesamson/inferno-app-rewired#how-to-rewire-your-create-inferno-app-project), then modify `config-overrides.js`

```javascript
const rewireMobX = require('inferno-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}
```

# Notes

* [Remove experimentalDecorators warning in VSCode](https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode)

