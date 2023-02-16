let id = 0;

document.getElementById("submit").addEventListener("click", () => {
    let createdDate = new Date();
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("todays-date").value;
    row.insertCell(1).innerHTML = document.getElementById("location").value;
    row.insertCell(2).innerHTML = document.getElementById("temperature").value;
    row.insertCell(3).innerHTML = document.getElementById("conditions").value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById("location").value = " ";
    document.getElementById("temperature").value = " ";
    document.getElementById("conditions").value = " ";
});

function createDeleteButton(id) {
    let btn = document.createElement("button");
    btn.className = "btn btn-outline-warning";
    btn.id = id;
    btn.innerHTML = "Remove";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}