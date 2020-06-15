import Api from './api'

const UsersService = {
    register: (params) => Api.post('', params)
}

export default UsersService;