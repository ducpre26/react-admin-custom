const url = "http://42.116.186.64:8176/secured/ws/rest/v1/async";
const customDataProvider = {
  getList: (resource, params) => {
    return fetch(`${url}/${resource}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46aVRlY2gxMjM0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return {
          data: data.body,
          total: data.header.totalRecords,
        };
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },

  //GET
  getOne: (resource, params) => {
    return fetch(`${url}/${resource}/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46aVRlY2gxMjM0",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return {
          data: data.body,
        };
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },

  //POST
  create: (resource, params) => {
  
    return fetch(`${url}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46aVRlY2gxMjM0",
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
  // //PUT
  // update: (resource, params) => Promise,
  // //DELETE
  // delete: (resource, params) => Promise
};
export default customDataProvider;
