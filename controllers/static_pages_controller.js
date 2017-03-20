
function about(request, response) {
  response.render('./static_pages/about.ejs')
}

module.exports = {
  about: about
}
