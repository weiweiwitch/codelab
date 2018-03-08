## 特性
参考了`https://github.com/sdeleuze/spring-boot-kotlin-demo`
* 使用gradle构建
* 通过springboot 2实现了基本的web请求处理
* 使用kotlin语言实现

## 注意
* 是否能返回json格式的数据是根据，classpath中是否有Jackson2。但如果还有jackson-dataformat-xml，就会返回xml格式数据。