package com.ariane.thirdlab.repositories

import com.ariane.thirdlab.domain.Post
import org.springframework.data.repository.CrudRepository

interface PostRepository : CrudRepository<Post, Long> {

    fun findByTitle(title: String): Post?

}