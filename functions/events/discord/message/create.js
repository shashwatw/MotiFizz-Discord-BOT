// Only respond to messages containing "cya", "gtg", or "bye"
if (context.params.event.content.match(/cya|gtg|bye/i)) {
  await lib.discord.channels['@0.3.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content: 'See you later, alligator 🐊',
    message_reference: {
      message_id: context.params.event.id
    }
  });
}