const getData = () => {
  let myDiv = document.getElementById("id1");
  let myDiv2 = document.getElementById("id2");
  myDiv.innerHTML = "hahahah";
  let dat;

  fetch("https://reqres.in/api/users/")
    .then((response) => response.json())
    .then((dat) => {
      console.log(dat);

      myDiv.innerHTML = JSON.stringify(dat);
      let arrayOfKeys = Object.keys(dat);
      for (let i = 0; i < arrayOfKeys.length; i++) {
        let innerObject = dat[arrayOfKeys[i]];
        let innerArrayOfKeys = Object.keys(dat[arrayOfKeys[i]]);
        for (let j = 0; j < innerArrayOfKeys.length; j++) {
          myDiv2.innerHTML += `${innerArrayOfKeys[j]}: ${
            innerObject[innerArrayOfKeys[j]]
          }  <br />`;
        }
      }
    });

  //   console.log(dat);
  //   myDiv2.innerHTML = dat;
};
const getMoreData = () => {
  let myDiv = document.getElementById("id3");
  let dat;
  fetch("https://reqres.in/api/users/2")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data));

  //  .then((data) => {
  //    console.log(data);
  //  });
  //    dat = data.data;
  //    for (let i = 0; i < dat.length; i++) {
  //      myDiv.innerHTML += `<div class="user"><img  src=${dat[i].avatar} width="90px" alt=${i} />
  //       Name: ${dat[i].first_name} ${dat[i].last_name} <br />E-Mail: ${dat[i].email}<br />
  //       </div><hr />`;
  //    }
  //  });
};
const putData = (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  console.log(name, job);
  let myObject = {
    name: name,
    job: job,
  };
  fetch("https://reqres.in/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myObject),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else throw new Error("Error");
    })
    .then((data) => {
      let arrOfKeys = Object.keys(data);
      let whatToPut = "";
      arrOfKeys.forEach(
        (item) => (whatToPut += `${item}: ${data[item]} <br />`)
      );
      document.getElementById("div2").innerHTML = whatToPut;
    })
    .catch((error) => console.log("somethings wrong here"));
};
const obtainData = () => {
  document.getElementById("fetchDataBtn").addEventListener("click", getData);
  document.getElementById("div2").addEventListener("click", getMoreData);
  document.getElementById("addPostForm").addEventListener("submit", putData);
  //   document.getElementById("sbmbtn").addEventListener("click", putData);
};
