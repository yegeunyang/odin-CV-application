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
      case "dateFrom":
        draft.dateFrom = event.target.value;
        break;
      case "dateTo":
        draft.dateTo = event.target.value;
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
        school: "Software Engineer",
        degree: "McDonald's",
        dateFrom: "2026/10",
        dateTo: "Present",
        city: "New York",
        about: "Meh",
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
              {education.dateFrom} - {education.dateTo}
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
              <div id="card-container">
                <input
                  type="text"
                  id="dateFrom"
                  name="dateFrom"
                  value={educations.draft.dateFrom}
                  onChange={draftEditHandler}
                />
                <input
                  type="text"
                  id="dateTo"
                  name="dateTo"
                  value={educations.draft.dateTo}
                  onChange={draftEditHandler}
                />
              </div>
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

export function ViewEducation({ educations }) {}
