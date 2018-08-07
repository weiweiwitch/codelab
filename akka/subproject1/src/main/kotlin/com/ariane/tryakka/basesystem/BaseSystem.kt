package com.ariane.tryakka.basesystem

import akka.actor.AbstractActor
import akka.actor.ActorRef
import akka.actor.ActorSystem
import akka.actor.Props
import java.lang.Thread.sleep

fun main(args: Array<String>) {

    val actorSystem = ActorSystem.create("basesystem")
    val ref = actorSystem.actorOf(BaseActor.props())
    ref.tell("hello", ActorRef.noSender())

    sleep(5000)

    println("结束ActorSystem")

    // 单机系统的和平结束。
    actorSystem.terminate()
}

class BaseActor() : AbstractActor() {

    companion object {
        fun props(): Props {
            return Props.create(BaseActor::class.java)
        }
    }

    override fun postStop() {
        println("postStop")
    }

    override fun createReceive(): Receive {
        return receiveBuilder()
            .matchAny {
                println("receive msg $it")
            }
            .build()
    }
}