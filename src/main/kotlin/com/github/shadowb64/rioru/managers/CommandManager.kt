package com.github.shadowb64.rioru.managers

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.vanilla.developer.EvalCommand
import com.github.shadowb64.rioru.commands.vanilla.music.*
import com.github.shadowb64.rioru.commands.vanilla.utils.*
import com.github.shadowb64.rioru.commands.vanilla.discord.*

class CommandManager {
    init {
        @Suppress("unused")
        registerCommands(
            EvalCommand(),
            // ///////////////Utils///////////////
            PingCommand(),
            HelpCommand(),
            // ///////////////Music///////////////
            PlayCommand(),
            QueueCommand(),
            // ///////////////Discord///////////////
            ChannelinfoCommand(),
            AvatarCommand()
        )
    }

    companion object {
        val commands = ArrayList<AbstractCommand>()

        fun getCommand(query: String): AbstractCommand? =
            commands.find { c -> c.name == query.toLowerCase() || c.aliases.contains(query.toLowerCase()) }

        fun unregisterCommand(commandName: String): Boolean? =
            when (commands.find { c -> c.name === commandName } === null) {
                true -> null
                false -> commands.remove(commands.find { c -> c.name === commandName })
            }

        fun registerCommands(vararg cmds: AbstractCommand) {
            println("[ MANAGERS ] [ Commands ] Just started loading the commands")
            for (cmd in cmds) {
                commands.add(cmd)
                println("[ COMMANDS ] [ ${cmd.name} ] loaded with success")
            }

            println("[ COMMANDS ] All commands loaded with success c:")
        }
    }
}