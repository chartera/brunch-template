import App from './components/app.vue'
Vue.component('search-app', App);

var init = function(payload){
    const content = new Vue({

	template: "<search-app></search-app>",
	data: {
	    payload: payload
	},
	created(){

	}
	
    });    
    return {view: content}; 
}

export {init}
