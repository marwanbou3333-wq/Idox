module.exports = {
  name: 'torture',
  execute(msg, args) {
    const user = args[0];
    if (!user) return msg.reply('حدد مستخدم');
    msg.reply('متا توقف عن الرسالة: ' + user);
  }
};