export const validateData = (email, password, name = '') => {
  // Check if name is required (Sign Up mode)
  if (name !== undefined) {
    if (!name.trim()) {
      return 'Full name is required (e.g., John Doe).';
    }
    if (!/^[a-zA-Z]+(?:[\s-'][a-zA-Z]+)*$/.test(name)) {
      return 'Please enter a valid full name (e.g., John Doe).';
    }
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return 'Please enter a valid email address.';
  if (!isPasswordValid)
    return 'Your password must contain at least 8 characters, one number and have a mixture of uppercase and lowercase letters.';

  return null;
};
