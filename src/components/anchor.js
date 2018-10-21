import Vue from 'vue'

Vue.component('anchor',{
    props: ['level','title'],
    render: function(h){
        console.log(this.$slots.default,'??')
        return h(
            'h' + this.level,
            [
                h('a',{
                    domProps: {
                        href: '#' + this.title
                    }
                },
                this.$slots.default)
            ]
        )
    }
})