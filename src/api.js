import axios from 'axios';

export const fetchUser = data => {
  const { q } = data;
  const promise = axios.get(`${process.env.REACT_APP_GITHUB_SEARCH_API}`, {
    params: { q },
  });
  promise.then(response => {
    return { response };
  });
  promise.catch(error => {
    return { error };
  });

  return promise;
};

export const fetchUserData = data => {
  const { q } = data;
  const promise = axios.get(`${process.env.REACT_APP_GITHUB_USER}/${q}`);
  promise.then(response => {
    return { response };
  });
  promise.catch(error => {
    return { error };
  });

  return promise;
};

export const fetchUserRepos = data => {
  const { q } = data;
  const promise = axios.get(`${process.env.REACT_APP_GITHUB_USER}/${q}/repos`);
  promise.then(response => {
    return { response };
  });
  promise.catch(error => {
    return { error };
  });

  return promise;
};
