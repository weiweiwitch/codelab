package com.ariane.thirdlab.domain

import java.io.Serializable;
import javax.persistence.*

@Entity
class Post() : Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long = 0L

    @Column(nullable = false)
    var title: String = ""

    constructor(title: String) : this() {
        this.title = title
    }
}