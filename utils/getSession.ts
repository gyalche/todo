export const getSession = () => {
  if (typeof window !== 'undefined') {
    const user = sessionStorage.getItem('user');
    return user;
  }
};
