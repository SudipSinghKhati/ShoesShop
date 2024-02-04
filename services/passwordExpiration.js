const passwordExpire = (lastModifiedDate) => {
  const passwordExpire = 90;
  const today = new Date();
  const passwordExpirationDate = new Date(lastModifiedDate);
  passwordExpirationDate.setDate(
    passwordExpirationDate.getDate() + passwordExpire
  );

  return today > passwordExpirationDate;
};

module.exports = { passwordExpire };
