import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//axios
// const github= axios.create({
//   baseURL:GITHUB_URL,
//   headers: { Authorization: `token ${GITHUB_TOKEN}`}
// })

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//SearchUsers
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });

  // const { items } = await response.json();

  // return items;

  // dispatch({
  //   type: "GET_USERS",
  //   payload: items,
  // });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

//Get user and repos
export const getUserAndRepos = async (login) => {
  //if u want to make 2 request use Promise.all  and pass in an array of request
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

//Single User
// export const getUser = async (login) => {
//   // setLoading();

//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();

//     // dispatch({
//     //   type: "GET_USER",
//     //   payload: data,
//     // });
//     return data;
//   }
// };

// //Get Repos
// export const getRepos = async (login) => {
//   // setLoading();

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await response.json();

//   //setUsers(data);
//   // setLoading(false);
//   //console.log(data);

//   // dispatch({
//   //   type: "GET_REPOS",
//   //   payload: data,
//   // });
//   return data;
// };
