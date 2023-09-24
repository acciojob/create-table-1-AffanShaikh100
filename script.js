function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
  const newrow = document.createElement("tr");
  const newtd1 = document.createElement("td");
  const newtd2 = document.createElement("td");
  newtd1.innerText = "New Cell1";
  newtd2.innerText = "New Cell2";
  newrow.append(newtd1, newtd2);
  let firstrow = table.firstChild;
  table.insertBefore(newrow, firstrow);
}
