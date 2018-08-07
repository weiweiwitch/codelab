package com.ariane.tryakka.shutdown

import akka.Done
import akka.actor.*
import com.typesafe.config.ConfigFactory
import java.util.concurrent.CompletableFuture
import java.util.concurrent.CompletionStage
import java.util.function.Supplier

fun main(args: Array<String>) {
    val config = ConfigFactory.load("shutdownSystem.conf")
    val actorSystem = ActorSystem.create("tryshutdown", config)

    addCoordinatedShutdownTasks(actorSystem)

    val ref = actorSystem.actorOf(BaseActor.props())
    ref.tell("hello", ActorRef.noSender())

    //Thread.sleep(5000)
}

private fun addCoordinatedShutdownTasks(actorSystem: ActorSystem) {
    with(CoordinatedShutdown.get(actorSystem)) {
        this.addTask(
            CoordinatedShutdown.PhaseActorSystemTerminate(),
            "systemTerminated",
            taskSupplier { println("systemTerminated") }
        )
    }
}

private fun taskSupplier(task: () -> Unit): Supplier<CompletionStage<Done>> =
    Supplier {
        CompletableFuture.supplyAsync {
            task()
            Done.getInstance()
        }
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
                context.stop(self)
            }
            .build()
    }
}