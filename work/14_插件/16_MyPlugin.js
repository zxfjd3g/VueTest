const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    console.log('静态方法: myGlobalMethod()...')
  }
  // 2. 添加全局资源
  Vue.directive('my-directive', function (value) {
    this.el.innerHTML = 'my-directive length='+value.length
  })
  // 3. 添加实例方法
  Vue.prototype.$myMethod = function () {
    console.log('实例方法: $myMethod()')
  }
}