
import Vue from 'vue'
import '../css/table.css'

Vue.component('vTable',{
    render(h){
        let _this = this

        let trs = []

        this.makeDate.forEach(item => {
            let tds = []
            this.makeColumnData.forEach((i)=>{
                tds.push(h('td',item[i.key]))
            })
            trs.push(h('tr',tds))
        });

        console.log(trs,'11')

        let theads = []
        this.makeColumnData.forEach((i,index)=>{
            if(i.sortable){
                theads.push(h('th',[
                    h('span',i.title),
                    h('span',{
                        class: {
                            on: i._sortType === 'asc',
                            normal: true
                        },
                        on: {
                            click(){
                                _this.handleSortByAsc(index)
                            }
                        }
                    },'↑'),
                    h('span',{
                        class: {
                            on: i._sortType === 'desc'
                        },
                        on: {
                            click(){
                                _this.handleSortByDesc(index)
                            }
                        }
                    },'↓')
                ]))
            }else{
                theads.push(h('th',i.title))
            }
        })
        return h('div',{
            },
            [
                h('table',{

                },[
                    h('thead',[
                        h('tr',theads)
                    ]),
                    h('tbody',trs)
                ])
            ]
        )
    },
    methods: {
        getData(){
            this.makeDate = this.data.map((item,index)=>{
                return {
                    ...item,
                    _index: index
                }
            })
        },
        getColumnData(){
            this.makeColumnData = this.columnData.map((item,index)=>{
                return {
                    ...item,
                    _index: index,
                    _sortType: 'normal'
                }
            })
        },
        handleSortByAsc(index){
            let key = this.makeColumnData[index].key
            this.makeColumnData.forEach((i)=>{
                i._sortType = 'normal'             // 排序之前将所有的状态重置为 normal
            })
            this.makeColumnData[index]._sortType = 'asc'
            this.makeDate.sort((a,b)=>{
                return a[key] > b[key] ? 1: -1  //兼容部分浏览器对sort处理不一致 所以才用 1 -1 
            })
        },
        handleSortByDesc(index){
            let key = this.makeColumnData[index].key
            this.makeColumnData.forEach((i)=>{
                i._sortType = 'normal'     // 排序之前将所有的状态重置为 normal
            })
            this.makeColumnData[index]._sortType = 'desc'
            this.makeDate.sort((a,b)=>{
                return a[key] < b[key] ? 1: -1   //兼容部分浏览器对sort处理不一致 所以才用 1 -1 
            })
        }
    },  
    data(){
        return {
            makeDate: [],
            makeColumnData: []
        }
    },  
    mounted(){
        this.getData()
        this.getColumnData()
    },  
    props: {
        columnData: {
            default: ()=>{
                return []
            },
            type:  Array
        },
        data: {
            default: ()=>{
                return []
            },
            type: Array
        }
    },
    watch: {
        data(){
            this.getData()

            let sortedList = this.makeColumnData.filter((item)=>{
                return item._sortType != 'normal'
            })

            if(sortedList.length > 0){
                if(sortedList[0]._sortType == 'asc'){
                    this.handleSortByAsc(sortedList[0]._index)
                }else{
                    this.handleSortByDesc(sortedList[0]._index)
                }
            }
        }
    }
})