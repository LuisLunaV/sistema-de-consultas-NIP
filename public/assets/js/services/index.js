// const url = "http://localhost:8080";

const { url, auth, users, consults, consultsDetails, consultsDate, clients, methods, brands, employes } = {
  // url : "http://localhost:8080",
  url : "https://sistema-de-consultas-production.up.railway.app",
  auth: "/auth/login",
  users: "/users",
  consults: "/consults",
  consultsDate: "/consults/dates",
  consultsDetails: "/consult_datails",
  clients: '/client',
  methods: "/methods",
  brands: "/brands",
  employes: '/employes'


};

export{
    url, 
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