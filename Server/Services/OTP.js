module.exports.generateOTP = () => {
    const OTP = Math.floor(Math.random() * 10000 + 1);
    return OTP;
};