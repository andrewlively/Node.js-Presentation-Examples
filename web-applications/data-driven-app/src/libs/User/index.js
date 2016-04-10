const User = require(`../Database`).User;
const bcrypt = require(`bcrypt`);

const hash = password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(
      password,
      10,
      (err, hash) => {
        if (err) {
          return reject(err);
        }

        resolve(hash);
      }
    );
  });
};

const passwordMatches = (plain, hashed) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(
      plain,
      hashed,
      (err, res) => {
        if (err) {
          return reject(err);
        }

        resolve(res);
      }
    );
  });
};

exports.login = (email, password, raw = true) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await new User({ email }).fetch();

      if (!user) {
        throw new Error(`User not found`);
      }

      const match = await passwordMatches(password, user.get(`password`));

      if (!match) {
        throw new Error(`Password mismatch`);
      }

      resolve(raw ? user.toJSON() : user);
    } catch (err) {
      reject(err);
    }
  });
};
