Module.export = {

async before(m, { conn}){
    // when someone sends a group link to the bot's dm
    if (
      (m.mtype === 'groupInviteMessage' ||
        m.text.startsWith('Hello') ||
        m.text.startsWith('Mambo')) &&
      !m.isBaileys &&
      !m.isGroup
    ) {
     return conn.reply(m.chat, `*Hi ✋*`, m)
      }
   }
}