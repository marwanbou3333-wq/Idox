module.exports = {
  name: 'nickname',
  execute(msg, args) {
    const nick = args.join(' ');
    if (!nick) return msg.reply('أدخل الاسم المستعار');
    msg.reply(`تم تغيير الاسم إلى: ${nick}`);
  }
};