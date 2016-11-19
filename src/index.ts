import {h, VNode} from '@cycle/dom';

const hyperx = require(`hyperx`);

/**
 * Returns a {@code VNode} tree representing the given HTML string.
 *
 * This is but a wrapper around hyperx to adjust its attrs for snabbdom, where snabbdom uses
 * various modules (`class`, `props`, `attrs`, and `style`) instead of a single attrs object.
 */
const html: (s: TemplateStringsArray, ...vals: any[]) => VNode = hyperx((tag: string, attrs: any, children: any[]) => {
    const attributes: {[k: string]: {}} = { attrs };
    if (attrs.className && typeof attrs.className == `string`) {
        const klass: { [k: string]: boolean } = {};
        attrs.className.split(' ').map((className: string) => klass[className] = true);
        attributes['class'] = klass;
    }

    if (children) {
        return h(tag, attributes, children.reduce((acc, val) => acc.concat(Array.isArray(val) ? val : [val]), []));
    }

    return h(tag, attributes);
});

export default html;
