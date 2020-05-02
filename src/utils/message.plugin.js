export default {
  install(Vue, options) {
    Vue.prototype.$message = function(text) {
      M.toast({html: text}) //materialize method
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}

//Плагин регистрируем глобально