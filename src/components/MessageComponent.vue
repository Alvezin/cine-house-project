<template>
    <h4> {{ state.msg }} </h4>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
export default {
    name: "MessageComponent",
    props:['msg'],
    setup (props, { emit }) {
        const state = reactive({
            msg: null
        })
        watch(
            () => props.msg,
            () => showMsg(),
            {
                deep: true
            }
        )
        function showMsg () {
            state.msg = props.msg
            setTimeout(() => {
                emit('cleanMsg')
                state.msg = null
            }, 4000)
        }

        return{
            state,
            showMsg
        }
    }
}
</script>

<style>

</style>