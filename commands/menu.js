module.exports = {
  name: 'menu',
  execute(msg) {
    const menu = '= قائمة الأوامر =\n!help - فورل\n!promote - ترقية\n!demote - خفض\n!lock - قفل';
    msg.reply(menu);
  }
};