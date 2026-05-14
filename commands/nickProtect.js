module.exports = {
  name: 'nickprotect',
  execute(msg, args) {
    const action = args[0];
    if (action === 'on') msg.reply('تم تفعيل حماية الاسم');
    else msg.reply('تم تعطيل حماية الاسم');
  }
};