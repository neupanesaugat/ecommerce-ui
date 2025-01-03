let userRole;

if (typeof window !== 'undefined') {
  userRole = window.localStorage.getItem('role');
}

export const isBuyer = () => {
  return userRole === 'buyer';
};
export const isSeller = () => {
  return userRole === 'seller';
};
