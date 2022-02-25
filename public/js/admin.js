async function changeRow(id) {

  id = id.replace(/[A-z]+/gm, '');
  console.log(id);
  try {
    const res = await fetch(`/admin/data/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      const data = res.json();
      console.log(await data);
    }
  } catch (error) {
    console.error(error);
  }

}

async function deleteRow(id) {

  id = id.replace(/[A-z]+/gm, '');
  try {
    const res = await fetch(`/admin/data/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    });
    if (res.ok) {
      document.getElementById(id).remove();
    }
  } catch (error) {
    console.error(error);
  }

}

function childrenRow() {

  const table = document.getElementById("childTable");
  // GET TOTAL NUMBER OF ROWS 
  const x = table.rows.length;
  const id = "tbl" + x;
  const row = table.insertRow(x);
  row.id = id;
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.outerHTML = `<th> ${x}</th>`;
  cell2.innerHTML = `<input type="text" 
    name="PeopleType.name" 
    class="form-control" 
    value="${document.getElementById('inputCategory').value}"/>`;
  cell3.innerHTML = ' <input type="text" name="DayType.name" class="form-control" />';
  cell4.innerHTML = ' <input type="date" name="date" class="form-control" />';
  cell5.innerHTML = ' <input type="number" name="value" class="form-control" />';
  cell6.innerHTML = getButtonsGroupHtml(x);
}

function getButtonsGroupHtml(id) {
  return `<div class="btn-group btn-group-sm" aria-label="Basic example">
    <input type=" button" class="btn btn-outline-warning btn-sm" id="addrow" onclick="changeRow('tbl${id}')"
      value="Изменить" />
    <input type=" button" class="btn btn-outline-danger btn-sm" id="addrow" onclick="deleteRow('tbl${id}')"
      value="Удалить" />
  </div>`;
}
