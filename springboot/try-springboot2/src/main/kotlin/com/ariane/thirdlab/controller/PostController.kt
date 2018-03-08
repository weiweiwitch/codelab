package com.ariane.thirdlab.controller

import org.springframework.boot.jackson.JsonComponent
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(produces=["application/json"])
class PostController() {

    @GetMapping("/posts")
    fun findAll(): PostsResult {
        return PostsResult("AAAA")
    }

    @GetMapping("/posts/{title}")
    fun findByLastName(@PathVariable title: String): String {
        return "BBB"
    }
}

data class PostsResult(val title: String)