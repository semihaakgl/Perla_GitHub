//*========================================
//*             3- FETCH API
//*========================================
console.log("FETCH");

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => showGithubUsers(data))
  .catch((err) => console.log(err));

const showGithubUsers = (users) => {
  console.log(users);
  const userArticle = document.querySelector(".users");

  users.forEach((user) => {
    userArticle.innerHTML += `<h2 class="h4 text-warning">${user.login}</h2> 
    <img class="w-25 mb-4" src=${user.avatar_url} alt=""/>`;
  });
};

console.log("Bitti");
