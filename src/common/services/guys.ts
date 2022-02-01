import { ApiCaller } from 'common/helpers/api-caller.helper'

export const getGuys = () => {
  return ApiCaller({
    method: 'GET',
    url: `${process.env.REACT_APP_JSON_PLACE_HOLDER}/users`,
  })
}
