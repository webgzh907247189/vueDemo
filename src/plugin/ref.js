class Ref {}

// 垮多层级获取 ref 使用
Ref.install = function install(Vue) {
    /* eslint-disable */
    const [, { name }] = Array.from(arguments);
    /* eslint-enable */
    const directiveName = name ?? 'ref';

    Vue.directive(directiveName, {
        bind: function bind(el, binding, vnode) {
            binding.value(vnode.componentInstance || el, vnode.key);
        },

        update: function update(el, binding, vnode, oldVnode) {
            if (oldVnode.data && oldVnode.data.directives) {
                const oldBinding = oldVnode.data.directives.find((directive) => {
                    const { name: direName } = directive;
                    return direName === directiveName;
                });

                if (oldBinding && oldBinding.value !== binding.value) {
                    /* eslint-disable */
                    oldBinding && oldBinding.value(null, oldVnode.key);
                    /* eslint-enable */
                    binding.value(vnode.componentInstance || el, vnode.key);
                    return;
                }
            }

            if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
                binding.value(vnode.componentInstance || el, vnode.key);
            }
        },

        unbind: function unbind(el, binding, vnode) {
            binding.value(null, vnode.key);
        },
    });
};

export default Ref;
