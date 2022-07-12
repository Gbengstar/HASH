const randomatic = require('randomatic');
const { hash, compare } = require('bcryptjs');

exports.hash_otp = async () => {
  // step one >>> create the token
  const OTP = randomatic('0', 6);

  // step 2 >> encrypt the OTP
  const _hash = await hash(OTP, 10);
  console.log(OTP);

  // STEP 3 >> save the _hash in the data base

  return OTP;
};

//WHEN YOU GET THE CODE

exports.compare_otp = async (otp, hash) => {
  return await compare(otp, hash); // this will return true or false
};
