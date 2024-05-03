const tbody = document.querySelector("#tbody");
const appointmentUrl = "https://chatterbot-ordering-fastapi.onrender.com";

const createTableRow = (data) => {
  const items = data.items?.map((item)=>{
    return `<tr><td>${item.item_name}</td>
    <td>${item.quantity}</td>
    </tr>`;
  })
  return `<tr>
        <td>${data.customer_info?.customer_name || ""}</td>
        <td>${data.order_id || ""}</td>
        <td>${data.paid ? "Paid" : "Not Paid"}</td>
        <td>
            <button type="button" class="btn1 btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#myModal-${
              data.order_id
            }">
                View details
            </button>
            <div class="modal fade" id="myModal-${data.order_id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" style="color: blue;">Sell page form</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                        <h4>Customer Info</h4>
                        <ol>
                        <li><strong>Customer Name: </strong> ${data.customer_info?.customer_name}</li>
                        <li><strong>Customer Code: </strong> ${data.customer_info?.customer_code}</li>
                        <li><strong>Customer Address: </strong> ${data.customer_info?.customer_address}</li>
                        </ol>
                       
                        <h4>Item ordered</h4>
                        <table>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
            <tbody id="tbody">
            ${items}</tbody>
          </table>
                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>`;
};

const getAllAppointment = async () => {
  try {
    const res = await axios.get(`${appointmentUrl}/orders`);
    const appointments = res.data.orders;
    console.log(res.data.orders)
    const tableRows = appointments.map(createTableRow);
    tbody.innerHTML = tableRows.join("");
    console.log(res.data.orders);
  } catch (error) {
    console.log(error);
    alert("Failed to fetch appointments. Please try again later.");
  }
};

getAllAppointment();
