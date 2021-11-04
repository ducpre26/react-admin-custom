
var url = "http://42.116.186.64:8176/secured/ws/rest/v1/async";
var basicAuth=`Basic ${localStorage.getItem('basicAuth')}`;
console.log(basicAuth);
const myDataProvider = {
   // READ
   getList: (resource, params) => { 
      const { page, perPage } = params.pagination;
      const rangeStart = (page - 1) * perPage;
      const rangeEnd = page * perPage - 1;
      return fetch(`${url}/${resource}?limit=${rangeEnd}&offset=${rangeStart}&orderBy=id`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Authorization':basicAuth 
         }
      })
         .then(response => response.json())
         .then(data => {
            console.log(data.body);
            return {
               data: data.body,
               total:data.header.totalRecords
            };   
         })
         .catch((error) => {
            console.error("Error:",error);
         });
   },
   // READ 1
   getOne: (resource, params) => {
      return fetch(`${url}/${resource}/${params.id}`,{
         method:'GET',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': basicAuth
         },
      })
      .then(response =>response.json())
      .then(data => {
         return {
            data: data.body
         };
      });
   }, 
   // CREATE
   create: (resource, params) => {
  
      return fetch(`${url}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': basicAuth
        },
        body: JSON.stringify(params.data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return {
            data: data.body,
          };
        });
   },
   // PUT
   
};
export default myDataProvider;



