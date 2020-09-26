/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'setprefix',
            aliases: [],
            category: 'Miscellaneous'
        })
    }
   async run ({ channel, args, guild, member }) {
        const firebase = require('firebase')
        const database = firebase.database()

        if(!member.permissions.has("ADMINISTRATOR", "MANAGE_GUILD")) return channel.send('<:xSweet:756989900661850182> | Você precisa das Permissões `Administrador` e `Gerenciar Servidor`')

        const prefixo = args[0]
        if(!prefixo) return channel.send('<:xSweet:756989900661850182> | Você não disse um Prefixo para mim setar!')

        const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')

        database.ref(`Servidores/${guild.id}/Configs`).update({
            BemVindoID: db.val().BemVindoID,
            MensagemBemVindo: db.val().MensagemBemVindo,
            SaidaID: db.val().SaidaID,
            SaidaMensagem: db.val().SaidaMensagem,
            LogsID: db.val().LogsID,
            prefix: prefixo
            })

        channel.send(`<:checkSweet:757016162633646211> | O Prefixo de ${guild.name} agora é \`${prefixo}\` .`)
    }
}
