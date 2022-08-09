module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b76cf1c4cedeec15b68bf29d3294bb0'),
  },
});
