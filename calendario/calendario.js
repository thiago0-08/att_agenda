document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth", // Visão mensal
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      },
      events: [
        { title: "Evento 1", start: "2025-02-28" },
        { title: "Evento 2", start: "2025-03-01", end: "2025-03-02" }
      ]
    });
    calendar.render();
  });
  