module.exports = {
  isAdmin: async (userId, groupId) => true,
  checkPermission: (user) => user.isAdmin
};