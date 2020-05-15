const tools = {
   filterParams (params) {
    for (const iterator in params) {
      if(!params[iterator]) {
        delete params[iterator]
      }
    }
    return params
  }
};

export default tools;
