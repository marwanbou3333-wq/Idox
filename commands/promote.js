module.exports = {
  name: 'promote',
  execute(msg, args) {
    if (!args[0]) return msg.reply('حدد مستخدم للترقية');
    msg.reply(`تم ترقية ${args[0]} إلى مسؤول`);
  }
};