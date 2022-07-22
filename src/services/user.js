export const getGithubUser = async (user) => {
  const response = await fetch(`https://api.github.com/users/${user}`, {
    method: "GET"
  });
  const payload = await response.json();

  return payload;
};
