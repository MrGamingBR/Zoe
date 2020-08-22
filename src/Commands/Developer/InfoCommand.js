module.exports = {
	config: {
		name: 'info',
		aliases: [], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
		const { MessageEmbed } = require('discord.js')
		const discloud = require("discloud-status");

		const embed = new MessageEmbed()
		.setTitle("a")
		.setDescription("b")
		.addField("Consumo de RAM na DisCloud :", discloud.ram())
		.addField("------------------------", `Total de Servidores : ${client.guilds.cache.size}`)
		.addField("------------------------", `Total de usuários: ${client.users.cache.size} Usuários`)
		.addField("Versão do Node", `${process.version}`)
		.addField("------------------------", "[Me adicione em seu Servidor](https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot)")
		.addField("------------------------", "[Servidor de Suporte](https://discord.gg/J6224bm)")
		message.channel.send(embed)
	}
}