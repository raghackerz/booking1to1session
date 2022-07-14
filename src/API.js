import { SEARCH_MENTOR_URL, SIGN_IN_URL, EMAIL_CHECK_URL } from './config'
const postConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.authorization}`,
  }
}

const apiSettings = {

  fetchMentors: async (searchTerm) => {
    const bodyData = {
      searchTerm: searchTerm,
    }

    return await (await fetch(SEARCH_MENTOR_URL, {
      ...postConfig,
      body: JSON.stringify(bodyData),
    })).json();
  },
  signIn: async (email, password) => {
    const bodyData = {
      email: email,
      password: password,
    }

    return await (await fetch(SIGN_IN_URL, {
      ...postConfig,
      body: JSON.stringify(bodyData),
    })).json();
  },
  checkEmailExists: async (email) => {
    const bodyData = {
      email: email,
    }

    return (await (await fetch(EMAIL_CHECK_URL, {
      ...postConfig,
      body: JSON.stringify(bodyData),
    })).json()).exists;
  }
};

export default apiSettings;
