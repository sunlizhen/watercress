/**
 * Created by SlzStar on 2017/10/30.
 */
export function getMovie (eachMovie, obj, params) {
  let path = 'https://api.douban.com/'
  return obj.$http.jsonp(path + eachMovie, params)
}
