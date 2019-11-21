import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state:{
        subscription:[],
        history:[]
    },
    mutations:{
        historyAdd(state,payload){
            let arr = state.history.filter(item => item.id != payload.id)
            state.history = arr
            state.history.push(payload)            
        },
        subscriptionAdd(state,payload){
            state.subscription.push(payload)
            // console.log(state.subscription)
        },
        cancel(state,payload){
            state.subscription = state.subscription.filter(item => item.name != payload.name)
            // console.log(state.subscription)
        }
    },
    actions:{}
})

export default store