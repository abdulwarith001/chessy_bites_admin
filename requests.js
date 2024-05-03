const tbody = document.getElementById("tbody");

const appointmentUrl = "https://chatterbot-ordering-fastapi.onrender.com";

const getAllAppointment = async () => {
  try {
    const res = await axios.get(`${appointmentUrl}/menu`);
    const data = res.data.menu;

    // Constructing table rows
    const table = data.map((item) => {
      return `<tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                    </tr>`;
    });

    // Setting inner HTML of tbody
    tbody.innerHTML = table.join(""); // Joining table rows into a single string

  } catch (error) {
    alert(error.response.data.message);
  }
};

getAllAppointment();
