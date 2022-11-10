import crypto from 'crypto';

export const encrypt = (text: string) => {
  if (!process.env.ENCRYPTION_SECRET_KEY) throw new Error('ENCRYPTION_SECRET_KEY must be defined');
  if (!process.env.ENCRYPTION_IV) throw new Error('ENCRYPTION_SECRET_KEY must be defined');

  const cipher = crypto.createCipheriv('aes-256-cbc', process.env.ENCRYPTION_SECRET_KEY, process.env.ENCRYPTION_IV);
  let encrypted = cipher.update(text, 'utf8', 'base64') + cipher.final('base64');
  return encrypted;
};

export const decrypt = (text: string) => {
  if (!process.env.ENCRYPTION_SECRET_KEY) throw new Error('ENCRYPTION_SECRET_KEY must be defined');
  if (!process.env.ENCRYPTION_IV) throw new Error('ENCRYPTION_SECRET_KEY must be defined');

  const decipher = crypto.createDecipheriv('aes-256-cbc', process.env.ENCRYPTION_SECRET_KEY, process.env.ENCRYPTION_IV);
  let decrypted = decipher.update(text, 'base64', 'utf8') + decipher.final('utf8');
  return decrypted;
};