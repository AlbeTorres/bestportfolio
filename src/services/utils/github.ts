import clienteaxios from "./axios";

export const fetchGithubReposInfo = () =>
clienteaxios.get('user/repos').then(r => r.data).catch(e=>e.response.data)