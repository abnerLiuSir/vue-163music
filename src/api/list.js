import{ Get } from './index'

export const DISCOVERY_BANNER = (params) => {
    params.route = "banner"
    return Get('/forward', params)
}

export const DISCOVERY_HOT_RECOMMEND = (params) => {
    params.route = "personalized"
    return Get('/forward', params)
}