module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf18da0e4e774a6723965b318b6a8c7b'),
  },
});
