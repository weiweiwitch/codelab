package com.ariane.thirdlab

import org.slf4j.LoggerFactory
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
open class App {

    private val log = LoggerFactory.getLogger(App::class.java)

    @Bean
    open fun init() = CommandLineRunner {

    }

}

fun main(args: Array<String>) {
    runApplication<App>(*args)
}