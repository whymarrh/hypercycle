hypercycle
==========

A [Cycle.js](https://cycle.js.org) shim for [hyperx](https://github.com/substack/hyperx). (It's an awful name, I know, sorry.)

Where Cycle.js uses Snabbdom for its DOM driver and hyperx does not work with Snabbdom out of the box, this module translates what hyperx wants into something that Snabbdom can use. The result is a function that can be used to write HTML inside a template literal and get back the corresponding vdom tree.

API
---

This module exports but a single function:

```js
const {html} = require(`hypercycle`);
const vdom = html`<div>This is some HTML showing that 3 + 4 is ${3 + 4}</div>`;
```

See [hyperx](https://github.com/substack/hyperx)'s documentation for more examples.
