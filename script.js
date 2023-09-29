function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
  const newrow = document.createElement("tr");
  const newtd1 = document.createElement("td");
  const newtd2 = document.createElement("td");
  newtd1.innerHTML = "New Cell1";
  newtd2.innerHTML = "New Cell2";
  newrow.appendChild(newtd1);
  newrow.appendChild(newtd2);
  let firstrow = table.firstChild;
  table.insertBefore(newrow, firstrow);
}
