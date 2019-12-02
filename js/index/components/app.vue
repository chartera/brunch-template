<template>
<div>
  <h1>Hello Index</h1>
  <component :is="selected"></component>
</div>
</template>

import Layout from './layout.vue'
Vue.component('home', Layout);
export default {
    props: ["payload"],
    data: function(){
	return {
	    selected: Layout
	};
    },
    methods: {
	
    },
    computed: {

    },
    created(){
      console.log("WOW")
    }
}
