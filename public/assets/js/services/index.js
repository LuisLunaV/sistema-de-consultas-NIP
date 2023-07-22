const { url, auth, users, consults, consultsDetails, consultsDate, clients, methods, brands, employes, urlSmS } = {
  auth:            '/auth/login',
  brands:          '/brands',
  consults:        '/consults',
  consultsDate:    '/consults/dates',
  consultsDetails: '/consult_datails',
  clients:         '/client',
  employes:        '/employes',
  methods:         '/methods',
  users:           '/users',
  url :            'http://localhost:8080',
  urlSmS:          'https://apisms.c3ntro.com:8282/'

};

export{
    url, 
    urlSmS,
    auth, 
    users, 
    consults, 
    consultsDate,
    consultsDetails,
    clients,
    methods,
    brands,
    employes
}