## 这个工程是为了测试react-router的各种特性

## 基本概念
React Router中有3种类型的组件：router组件、route匹配的组件、导航组件。这些组件都需要从react-router-dom导入。

### Routers
顶层是一个router组件。`react-router-dom`提供了`<BrowserRouter>`和`<HashRouter>`。
* BrowserRouter适合有后端的
* HashRouter适合静态文件服务器

### Route Matching
有两种匹配组件：`<Route>`、`<Switch>`

Route：通过将路径和path属性比较来完成匹配。如果没有path属性，那么始终能匹配上。

Switch可以包裹多个Route。它会遍历每个Route，直到找到一个符合路径的。
它的作用在于，它只会显示第一个符合路径的，后续的将不再判断。

### Route渲染属性
有3个属性选择
* component：指定一个已经存在的组件
* render：嵌入一个inline函数用于渲染。
* children：用的不多，多用于动画。它需要设置为一个inline函数。这个函数接受的参数和component以及render一样。区别在于，路径不匹配时，这个函数也会被调用，并且match会为null，从而让你决定如何显示route中的UI。

### 导航
提供了`<Link>`组件用于创建链接。内部会渲染一个`<a>`。

`<NavLink>`是个特殊类型的`<Link>`，路径匹配时，activeClassName中的值将生效，从而一个class被应用到`<a>`上。

`<Redirect>`，当你需要强制导航时，你可以渲染一个`<Redirect>`，它会导航到`to`属性指定的路径。