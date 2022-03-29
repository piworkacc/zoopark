async function changeRow(id) {

  // id = id.replace(/[A-z]+/gm, '');

  // try {
  //   const res = await fetch(`/admin/data/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       peopleType_id: document.getElementById(`tbl${id}`),
  //       dayType_id: document.getElementById('inputTypeOfTheDay').value,
  //       date: document.getElementById('inputFromDate').value,
  //       value: document.getElementById('inputTarifValue').value
  //     })
  //   });
  //   if (res.ok) {
  //     const data = res.json();
  //     console.log(await data);
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

}

async function deleteRow(id) {

  id = id.replace(/[A-z]+/gm, '');
  try {
    const res = await fetch(`/admin/data/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      document.getElementById(`tbl${id}`).remove();
    }
  } catch (error) {
    console.error(error);
  }

}

async function childrenRow() {

  const table = document.getElementById("childTable");
  // GET TOTAL NUMBER OF ROWS 
  const x = table.rows.length;

  try {
    const res = await fetch(`/admin/data/${x}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        peopleType_id: document.getElementById('inputCategory').value,
        dayType_id: document.getElementById('inputTypeOfTheDay').value,
        date: document.getElementById('inputFromDate').value,
        value: document.getElementById('inputTarifValue').value
      }),
    });
    if (res.ok) {
      const { result } = await res.json();
      console.log(result);
      const id = "tbl" + result.id;
      const row = table.insertRow(x);
      row.id = id;
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);

      cell1.outerHTML = `<th> ${result.id}</th>`;
      cell2.innerHTML = `<input type="text" 
          name="PeopleType.name" 
          class="form-control" 
          value="${document.getElementById('inputCategory').value}"/>`;
      cell3.innerHTML = getInputsTextGroupHtml(result.id);
      cell4.innerHTML = getInputsDateGroupHtml(result.id);
      cell5.innerHTML = getInputsNumberGroupHtml(result.id);
      cell6.innerHTML = getButtonsGroupHtml(result.id);

    }
  } catch (error) {
    console.error(error);
  }

}

function getButtonsGroupHtml(id) {
  return `<div class="btn-group btn-group-sm" aria-label="Basic example">
            <input type=" button" class="btn btn-outline-danger btn-sm" id="addrow" onclick="deleteRow('tbl${id}')"
              value="Удалить" />
          </div>`;
}

function getInputsDateGroupHtml(id) {
  return `<div class="input-group input-group-sm mb-3">
            <input type="date" name="date" class="form-control" 
            value="${document.getElementById('inputFromDate').value}"/>
          </div>`;
}

function getInputsTextGroupHtml(id) {
  return `<div class="input-group input-group-sm mb-3">
            <input type="text" name="DayType.name" class="form-control" 
            value="${document.getElementById('inputTypeOfTheDay').value}" />
          </div>`;
}

function getInputsNumberGroupHtml(id) {
  return `<div class="input-group input-group-sm mb-3">
            <input type="number" name="value" class="form-control" 
              value="${document.getElementById('inputTarifValue').value}"/>
          </div>`;
}
