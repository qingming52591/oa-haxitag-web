const env = {
    mini: 'mini',
    zhaoli: 'zhaoli',
    kyt: 'kyt'
}


module.exports = {
    env: env,
    appBuild: () => {
        if (process.env.REACT_APP_ENV in env) {
            return process.env.REACT_APP_ENV
        } else {
            return 'build'
        }
    }
}