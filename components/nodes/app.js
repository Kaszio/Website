
    
// api url

  const url = 'https://api.runonflux.io/daemon/getzelnodecount';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let thedata = data;
      let numofnodes = document.getElementById('danodes');
      numofnodes.innerHTML = `${thedata.data.total}`;
    })
    .catch(function(error) {
      console.log(error);
    });
