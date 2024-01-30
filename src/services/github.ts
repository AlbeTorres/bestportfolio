import type { FetchGithubRepos } from './github.type'
import clienteaxios from './utils/axios'

export const fetchGithubReposInfo: FetchGithubRepos = () =>
  clienteaxios
    .get('user/repos')
    .then(r => r.data)
    .catch(e => e.response.data)
