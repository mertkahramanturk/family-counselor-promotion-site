import React from "react";
//Services

// Contact

const ContactPage = React.lazy(() => import("./pages/Contact/index"))

// Blog
const HomePage = React.lazy(() => import("./pages/Construction/index"));


//Bio

const MyBio = React.lazy(() => import("./pages/MyBio/index"))


const routes = [
//Services

  
  // Blog
  { path: "/", component: HomePage },
 

  //Bio
  {path: "/hakkımda" , component: MyBio},
// Contact

{path: "/contact", component: ContactPage}
  
];



export default routes;
