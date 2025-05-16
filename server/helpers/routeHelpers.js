function isActiveRoute(route, currentPath) {
  return route === currentPath ? 'active' : ''; 
}

module.exports = {
  isActiveRoute,
};