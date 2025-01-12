export default function Experience({ experiences, setExperiences }) {
  const draftEditHandler = (event) =>
    editExperiencesDraft(event, setExperiences, experiences);

  const draftSaveHandler = () => {
    setExperiences({
      list: experiences.list.concat([
        { ...experiences.draft, id: crypto.randomUUID() },
      ]),
      draft: null,
    });
  };

  const draftCancelHandler = () =>
    setExperiences({ ...experiences, draft: null });

  const addExperienceHandler = () =>
    setExperiences({
      ...experiences,
      draft: {
        id: "",
        title: "Software Engineer",
        company: "McDonald's",
        dateFrom: "2026/10",
        dateTo: "Present",
        city: "New York",
        about: "Meh",
      },
    });

  const deleteItemHandler = function deleteItemHandlerWrapper(experience) {
    const handler = function () {
      setExperiences({
        ...experiences,
        list: experiences.list.filter((e) => e.id !== experience.id),
      });
    };
    return handler;
  };

  return (
    <div id="experience">
      <h1>Experience</h1>
      <hr />
      {experiences.list.map((experience) => {
        return (
          <div key={experience.id} className="container">
            <div>
              <h3>
                {experience.title} at {experience.company}
              </h3>
              <br />
              {experience.dateFrom} - {experience.dateTo}
            </div>
            <button onClick={deleteItemHandler(experience)}>
              <img src="delete-svgrepo-com.svg"></img>
            </button>
          </div>
        );
      })}
      {experiences.draft !== null ? (
        <form>
          <div className="container">
            <div className="card">
              <label>Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                value={experiences.draft.title}
                onChange={draftEditHandler}
              />
            </div>
            <div className="card">
              <label>Company: </label>
              <input
                type="text"
                id="company"
                name="company"
                value={experiences.draft.company}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <div className="container">
            <div className="card">
              <label>Date: </label>
              <input
                type="text"
                id="dateFrom"
                name="dateFrom"
                value={experiences.draft.dateFrom}
                onChange={draftEditHandler}
              />
              <input
                type="text"
                id="dateTo"
                name="dateTo"
                value={experiences.draft.dateTo}
                onChange={draftEditHandler}
              />
            </div>
            <div className="card">
              <label>City: </label>
              <input
                type="text"
                id="city"
                name="city"
                value={experiences.draft.city}
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
                value={experiences.draft.about}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <button onClick={draftCancelHandler}>Cancel</button>
          <button onClick={draftSaveHandler}>Save</button>
        </form>
      ) : (
        <button onClick={addExperienceHandler}>Add Experience</button>
      )}
    </div>
  );
}

function editExperiencesDraft(event, setExperiences, experiences) {
  // Copy experiences.draft object
  const draft = { ...experiences.draft };

  switch (event.target.id) {
    case "title":
      draft.title = event.target.value;
      break;
    case "company":
      draft.company = event.target.value;
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
  setExperiences({ ...experiences, draft: draft });
}

export function ViewExperience({ experiences }) {}
