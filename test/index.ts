import * as test from 'tape';
import html from '../src/index';

const markup = require(`snabbdom-to-html`);

test(`html does generate simple div`, (t) => {
    t.plan(1);
    const vdom = html`<div></div>`;
    t.equal(markup(vdom), `<div></div>`);
});

test(`html does generate div with class name`, (t) => {
    t.plan(1);
    const vdom = html`<div class="foo"></div>`;
    t.equal(markup(vdom), `<div class="foo"></div>`);
});

test(`html does generate div with data attr`, (t) => {
    t.plan(1);
    const vdom = html`<div data-foo="bar"></div>`;
    t.equal(markup(vdom), `<div data-foo="bar"></div>`);
});

test(`html does generate div with style attr`, (t) => {
    t.plan(1);
    const vdom = html`<div style="color: red"></div>`;
    t.equal(markup(vdom), `<div style="color: red"></div>`);
});

test(`html does generate nested div`, (t) => {
    t.plan(1);
    const vdom = html`<div><div></div></div>`;
    t.equal(markup(vdom), `<div><div></div></div>`);
});

test(`html does generate child from nested vdom`, (t) => {
    t.plan(1);
    const vdom = html`<div>${html`<i>cool</i>`}</div>`;
    t.equal(markup(vdom), `<div><i>cool</i></div>`);
});

test(`html does generate children from nested array of numbers`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>${numbers.map(x => x + 1)}</div>`;
    t.equal(markup(vdom), `<div>23</div>`);
});

test(`html does generate children from nested array of vdom`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>${numbers.map(x => html`<i>${x}</i>`)}</div>`;
    t.equal(markup(vdom), `<div><i>1</i><i>2</i></div>`);
});

test(`html does generate children from text and nested array of vdom`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>A ${numbers.map(x => html`<i>${x}</i>`)}</div>`;
    t.equal(markup(vdom), `<div>A <i>1</i><i>2</i></div>`);
});

test(`html does generate children from nested array of vdom and text`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>${numbers.map(x => html`<i>${x}</i>`)} B</div>`;
    t.equal(markup(vdom), `<div><i>1</i><i>2</i> B</div>`);
});

test(`html does generate children from text, nested array of vdom, and text`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>A ${numbers.map(x => html`<i>${x}</i>`)} B</div>`;
    t.equal(markup(vdom), `<div>A <i>1</i><i>2</i> B</div>`);
});

test(`html does generate children from text, complex nested array of vdom, and text`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>A ${numbers.map(x => html`<i>foo is ${x}</i>`)} B</div>`;
    t.equal(markup(vdom), `<div>A <i>foo is 1</i><i>foo is 2</i> B</div>`);
});

test(`html does generate children from text, complex nested array of vdom, and text, keeping parent attrs`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div class="bar">A ${numbers.map(x => html`<i class="baz">foo is ${x}</i>`)} B</div>`;
    t.equal(markup(vdom), `<div class="bar">A <i class="baz">foo is 1</i><i class="baz">foo is 2</i> B</div>`);
});

test(`html does generate children from text, complex nested array of vdom, and text, keeping attrs`, (t) => {
    t.plan(1);
    const numbers = [1, 2];
    const vdom = html`<div>A ${numbers.map(x => html`<i class="baz">foo is ${x}</i>`)} B</div>`;
    t.equal(markup(vdom), `<div>A <i class="baz">foo is 1</i><i class="baz">foo is 2</i> B</div>`);
});
