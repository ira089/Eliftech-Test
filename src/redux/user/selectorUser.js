export const selectUsers = state => state.users;

export const selectSearch = state => state.search;

export const selectFilteredUsers = state => {
  const { fullName, email } = selectSearch(state);
  console.log(fullName);
  const { users } = selectUsers(state);

  if (!fullName && !email) {
    return users;
  }
  const normalizedFullName = fullName.toLowerCase();

  return users.filter(
    item =>
      item.name.toLocaleLowerCase().includes(normalizedFullName) &&
      item.email.includes(email)
  );
};
