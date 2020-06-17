let n = 0;
let visited = [];
let connection = [];

let cyclic = (previousNode, currentNode) => {
  debugger;
  visited[currentNode] = 1;
  for (let i = 0; i < n; i++) {
    if (visited[i] && connection[currentNode][i] && i !== previousNode) {
      return true;
    } else if (visited[i] === 0) {
      cyclic(currentNode, i);
    }
  }
};

let checkIfIsCyclic = () => {
  const noOfNodes = document.getElementById("noOfNodes").value;
  let strOfChecked = "";
  let arrayOfC = new Array(noOfNodes);
  // Create two dimensional array and Initilise all values  to "0"
  for (let i = 0; i < noOfNodes; i++) {
    arrayOfC[i] = new Array(noOfNodes);
    for (let j = 0; j < noOfNodes; j++) {
      arrayOfC[i][j] = 0;
    }
  }
  for (let i = 0; i < noOfNodes; i++) {
    for (let j = 0; j < noOfNodes; j++) {
      let idToCheck = `${i}_${j}`;
      let el = document.getElementById(idToCheck);
      if (el.checked) {
        strOfChecked += "X";
        arrayOfC[i][j] = 1;
        arrayOfC[j][i] = 1;
      } else strOfChecked += "O";
    }
    strOfChecked += "<br />";
  }

  document.getElementById("getRes").innerHTML = strOfChecked;
  for (let i = 0; i < noOfNodes; i++)
    document.getElementById("getRes").innerHTML += arrayOfC[i] + "<br />";
  // return arrayOfC;
  n = noOfNodes;
  connection = arrayOfC;
  let isCyclic;
  for (let i = 0; i < n; i++) {
    visited[i] = 0;
  }
  debugger;
  if (cyclic(-1, 0)) {
    //We set previous node to be -1 and first node to be 0
    isCyclic = true;
  } else {
    isCyclic = false;
  }
  document.getElementById("getRes").innerHTML = isCyclic;
};

let generateTable = () => {
  const noOfNodes = document.getElementById("noOfNodes").value;
  let myTable = document.getElementById("nodes");
  document.getElementById("tableInstr").style.visibility = "visible";
  document.getElementById("checkBtn").style.visibility = "visible";
  myTable.innerHTML = "";
  for (let j = 0; j < noOfNodes; j++) {
    let tr = document.createElement("tr");
    for (let i = 0; i < noOfNodes; i++) {
      let td = document.createElement("td");
      let rb = document.createElement("input");
      rb.type = "radio";
      // rb.value = "j_i";
      rb.id = `${j}_${i}`;
      j >= i && (rb.disabled = true);
      td.appendChild(rb);
      tr.appendChild(td);
    }
    myTable.appendChild(tr);
  }
};
