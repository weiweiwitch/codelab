package com.ariane.thirdlab

import com.alibaba.druid.pool.DruidDataSource
import com.ariane.thirdlab.domain.Post
import com.ariane.thirdlab.repositories.PostRepository
import org.hibernate.SessionFactory
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.orm.hibernate5.HibernateTransactionManager
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder
import java.util.*

@SpringBootApplication
open class App {

    private val log = LoggerFactory.getLogger(App::class.java)

    @Bean
    open fun init(repository: PostRepository) = CommandLineRunner {
        repository.save(Post("${Date().time}"))
    }
}

fun main(args: Array<String>) {
    runApplication<App>(*args)
}