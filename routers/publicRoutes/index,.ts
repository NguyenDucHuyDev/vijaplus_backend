import companyType from "../../controllers/apiPublic/companyType";


const publicRoutes = [
  {
    method:"get",
    path:"/api/company-type",
    controller: companyType
  },
];

export default publicRoutes;