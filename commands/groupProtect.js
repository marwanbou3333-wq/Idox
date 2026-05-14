module.exports = {
  name: 'groupprotect',
  execute(msg, args) {
    const action = args[0];
    if (action === 'on') msg.reply('تم تفعيل حماية المجموعة');
    else msg.reply('تم تعطيل حماية المجموعة');
  }
};