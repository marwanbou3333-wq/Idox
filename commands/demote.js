module.exports = {
  name: 'demote',
  execute(msg, args) {
    if (!args[0]) return msg.reply('حدد مستخدم للخفض');
    msg.reply(`تم خفض ${args[0]} من المسؤول`);
  }
};