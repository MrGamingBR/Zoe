const { Listener } = require('../../structure')
const { Utils, ErelaClient } = require('erela.js')

module.exports = class ReadyListener extends Listener {
  constructor () {
    super({
      name: 'ready',
      once: true
    })
  }

 async run () {
  this.lavalink = new ErelaClient(this, this.config.nodes, { autoPlay: true })
    .on('nodeConnect', node => console.log(`${node.options.tag || node.options.host} - Lavalink conectado com Sucesso.`))

    .on('nodeError', (node, err) => console.log(`Infelizmente, aconteceu um erro. Erro: ${err}`))

    .on('nodeReconnect', node => console.log(`${node.options.tag || nodes.options.host} está tentando fazer Reconexão...`))

    .on('nodeClose', () => console.log(`A instancia do Lavalink foi fechada ou você não ligou o Lavalink em outro terminal`))

    .on('queueEnd', async  player => {
      await player.textChannel.send('⏹ | A fila acabou...')
      setTimeout(function() {
        if (player.playing === false) {
        player.textChannel.send(':sleeping: | Saindo por causa da Inatividade....')
        return this.lavalink.players.destroy(player.guild.id)
      }
    }, 60000 * 2)

    })

    .on('trackStart', async ({ textChannel }, { title, duration, author }) => {
      const {MessageEmbed} = require('discord.js')
      const embed = new MessageEmbed()
        .setColor('#66dbff')
        .setDescription(`
      <a:discoSweet:759199892169687061> | → Música:
${title}

<a:discoSweet:759199892169687061> | → Duração:
${Utils.formatTime(duration, true)}

<a:discoSweet:759199892169687061> | → Artista/Canal:
${author}
`)
     const msg = await textChannel.send(embed)


        this.lavalink.on('trackEnd', (player) => {
          player.setVolume(100)
          msg.delete({ timeout: 1000 })
        })
    })

    .on('trackError', ({ textChannel }, { title }) => {
      textChannel.send('Ocorreu um erro ao carregar ' + title)
    })

    var status = [
      `😉 Tenho Custom Prefix, Me mencione para saber mais!`,
      `😛 Sabia que tenho um Sistema de Música ?`,
      `😢 Estou Hospedada na Heroku mas a minha qualidade fica péssima para tocar, Me ajude por favor...`,
      `😎 Sabia que eu sou open-source? | github.com/MrGamingBR/SweetBot`
  ],
   i = 0
   setInterval(() => this.user.setActivity(`${status[i++ % status.length]}`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrgamingbr0001"
    }), 8000)

   console.log(`
    ${this.user.username} iniciada com:

    ${this.users.cache.size} Usuários;

    ${this.guilds.cache.size} Guilds;

    ${this.commands.size} Comandos.`)
  }
}
