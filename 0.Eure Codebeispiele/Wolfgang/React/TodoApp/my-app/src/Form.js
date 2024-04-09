import React from 'react';



export default function Form() {
  return (
    <>
    <div id="taskId">
      <form action="task" method="post">
        <h2>Füge eine Aufgabe hinzu!</h2>

        <input type="hidden" id="userId" name="user_id" value="user_id" />

        <label htmlFor="task">Was möchten Sie erledigen?</label>
        <input type="text" id="task" name="task" required /><br />

        <fieldset>
          <legend>Wie wichtig ist Ihre Aufgabe?</legend>
          <label htmlFor="low">
            <input type="radio" id="low" name="priority" value="low" />
            LOW
          </label><br />
          <label htmlFor="middle">
            <input type="radio" id="middle" name="priority" value="middle" />
            MIDDLE
          </label><br />
          <label htmlFor="high">
            <input type="radio" id="high" name="priority" value="high" />
            HIGH
          </label>
        </fieldset>

        <label htmlFor="deadline">Gibt es eine Deadline?</label>
        <input type="date" id="deadline" name="due_date" /><br />
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
</>
  );

}

