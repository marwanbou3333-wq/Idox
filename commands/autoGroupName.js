module.exports = {
  name: 'autogroupname',
  execute(msg, args) {
    const name = args.join(' ');
    if (!name) return msg.reply('حدد اسم المجموعة');
    msg.reply('تم ضبط الاسم التلقائي: ' + name);
  }
};