export const ValidateProps = {
  user: {
    username: { type: 'string', minLength: 4, maxLength: 20 },
    name: { type: 'string', minLength: 1, maxLength: 50 },
    password: { type: 'string', minLength: 8 },
    email: { type: 'string', minLength: 1 },
    bio: { type: 'string', minLength: 0, maxLength: 160 },
    website: { type: 'string', minLength: 12 },
    address: { type: 'string', minLength: 5 },
    phone: { type: 'string', minLength: 10 },
    socialLinks: []
  },
  socialLink: {
    url: { type: 'string', minLength: 5 }
  },
  post: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
  },
  comment: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
  },
};
