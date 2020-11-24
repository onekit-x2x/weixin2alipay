function getCurrent() {
  const pags = getCurrentPages()
  return pags[pags.length - 1]
}
function getCurrentUrl() {
  return getCurrent().path
}
module.exports = {getCurrent, getCurrentUrl}
