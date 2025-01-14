export default function Experience({ educations, setEducations }) {
  function draftEditHandler(event) {
    // Copy educations.draft object
    const draft = { ...educations.draft };

    switch (event.target.id) {
      case "school":
        draft.school = event.target.value;
        break;
      case "degree":
        draft.degree = event.target.value;
        break;
      case "date":
        draft.date = event.target.value;
        break;
      case "city":
        draft.city = event.target.value;
        break;
      case "about":
        draft.about = event.target.value;
        break;
    }
    setEducations({ ...educations, draft: draft });
  }

  const draftSaveHandler = () => {
    setEducations({
      list: educations.list.concat([
        { ...educations.draft, id: crypto.randomUUID() },
      ]),
      draft: null,
    });
  };

  const draftCancelHandler = () =>
    setEducations({ ...educations, draft: null });

  const addEducationHandler = () =>
    setEducations({
      ...educations,
      draft: {
        id: "",
        school: "",
        degree: "",
        date: "",
        city: "",
        about: "",
      },
    });

  const deleteItemHandler = function deleteItemHandlerWrapper(education) {
    const handler = function () {
      setEducations({
        ...educations,
        list: educations.list.filter((e) => e.id !== education.id),
      });
    };
    return handler;
  };

  return (
    <div id="education">
      <h1>Education</h1>
      <hr />
      {educations.list.map((education) => {
        return (
          <div key={education.id} className="panel">
            <div>
              <h3>
                {education.degree} at {education.school}
              </h3>
              {education.date}
            </div>
            <button onClick={deleteItemHandler(education)}>
              <img src="delete-svgrepo-com.svg"></img>
            </button>
          </div>
        );
      })}
      {educations.draft !== null ? (
        <form>
          <div className="container">
            <div className="card">
              <label>School: </label>
              <input
                type="text"
                id="school"
                name="school"
                value={educations.draft.school}
                onChange={draftEditHandler}
              />
            </div>
            <div className="card">
              <label>Degree: </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={educations.draft.degree}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <label>Date: </label>
              <input
                type="text"
                id="date"
                name="date"
                value={educations.draft.date}
                onChange={draftEditHandler}
              />
            </div>
            <div className="card">
              <label>City: </label>
              <input
                type="text"
                id="city"
                name="city"
                value={educations.draft.city}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <label>About: </label>
              <input
                type="text"
                id="about"
                name="about"
                value={educations.draft.about}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <button onClick={draftCancelHandler}>Cancel</button>
          <button onClick={draftSaveHandler}>Save</button>
        </form>
      ) : (
        <button onClick={addEducationHandler}>+ Add Education</button>
      )}
    </div>
  );
}

export function ViewEducation({ educations }) {
  return (
    <div id="view-education">
      <h1>Education</h1>
      {educations.list.map((education) => {
        return (
          <div className="container" key={education.id}>
            <h2>{education.degree}</h2>
            <p className="date">{education.date}</p>
            <p className="location">
              {education.school} - {education.city}
            </p>
            <p className="about">{education.about}</p>
          </div>
        );
      })}
    </div>
  );
}
