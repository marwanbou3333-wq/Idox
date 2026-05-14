module.exports = {
  name: 'automsg',
  execute(msg, args) {
    const text = args.join(' ');
    if (!text) return msg.reply('أدخل نص رسالتي');
    msg.reply('تم إضافة رسالة بالأبت: ' + text);
  }
};