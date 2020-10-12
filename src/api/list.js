import{ Get } from './index'

export const DISCOVERY_BANNER = (params) => {
    params.route = "banner"
    return Get('/forward', params)
}