const logout = (req, res) => {
  res.clearCookie('token', { httpOnly: true, secure: true });
  res.status(200).json({ success: true });
};
module.exports = logout;
