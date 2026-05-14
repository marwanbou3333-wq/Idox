module.exports = {
  name: 'autoaccept',
  execute(msg, args) {
    const action = args[0];
    if (action === 'on') msg.reply('تم تفعيل قبول الطلبات التلقائي');
    else msg.reply('تم تعطيل قبول الطلبات التلقائي');
  }
};