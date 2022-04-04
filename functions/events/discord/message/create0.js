// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Hey <@!${context.params.event.author.id}>! I'm a bot powered by Autocode.`,
    `You mentioned me in a message, so here I am!`
  ].join('\n'),
  embeds: [{
    title: 'Guild Information',
    type: 'rich',
    color: 0x00AA00, // Green color
    description: 'You could add some information here for guild members to view!',
    fields: [{
      name: 'Message Formatting',
      value: [
        'Check out this link for more details on formatting message embeds:',
        'https://discord.com/developers/docs/resources/channel#embed-object-embed-structure'
      ].join('\n')
    }]
  }],
  tts: false
});

return messageResponse;