// const url = "http://localhost:8080";

const { url, auth, users, consults, consultsDetails, consultsDate, methods, brands } = {
  url : "http://localhost:8080",
  auth: "/auth/login",
  users: "/users",
  consults: "/consults",
  consultsDate: "/consults/dates",
  consultsDetails: "/consult_datails",
  methods: "/methods",
  brands: "/brands"

};

export{
    url, 
    auth, 
    users, 
    consults, 
    consultsDate,
    consultsDetails,
    methods,
    brands
}