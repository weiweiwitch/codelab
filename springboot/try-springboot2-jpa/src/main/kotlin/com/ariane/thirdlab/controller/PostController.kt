package com.ariane.thirdlab.controller

import com.ariane.thirdlab.domain.Post
import com.ariane.thirdlab.repositories.PostRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.jackson.JsonComponent
import org.springframework.data.jpa.repository.support.SimpleJpaRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(produces=["application/json"])
class PostController() {

    @Autowired
    lateinit var postRepository: PostRepository;

    @GetMapping("/posts")
    fun findAll(): Iterable<Post> {
        return postRepository.findAll()
    }

    @GetMapping("/posts/{title}")
    fun findByTitle(@PathVariable title: String): Post? {
        return postRepository.findByTitle(title)
    }
}

data class PostsResult(val title: String)