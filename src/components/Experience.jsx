export default function Experience({ experiences, setExperiences }) {
  function draftEditHandler(event) {
    // Copy experiences.draft object
    const draft = { ...experiences.draft };

    switch (event.target.id) {
      case "title":
        draft.title = event.target.value;
        break;
      case "company":
        draft.company = event.target.value;
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
    setExperiences({ ...experiences, draft: draft });
  }

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
        title: "",
        company: "",
        date: "",
        city: "",
        about: "",
      },
    });

  const deleteItemHandler = function deleteItemHandlerWrapper(experience) {
    const handler = function () {
      setExperiences({
        ...experiences,
        list: experiences.list.filter((item) => item.id !== experience.id),
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
          <div key={experience.id} className="panel">
            <div>
              <h3>
                {experience.title} at {experience.company}
              </h3>
              {experience.date}
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
                placeholder="Job title"
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
                placeholder="Company"
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
                id="date"
                name="date"
                placeholder="YYYY/MM - YYYY/MM"
                value={experiences.draft.date}
                onChange={draftEditHandler}
              />
            </div>
            <div className="card">
              <label>City: </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
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
                placeholder="Description"
                value={experiences.draft.about}
                onChange={draftEditHandler}
              />
            </div>
          </div>
          <button onClick={draftCancelHandler}>Cancel</button>
          <button onClick={draftSaveHandler}>Save</button>
        </form>
      ) : (
        <button onClick={addExperienceHandler}>+ Add Experience</button>
      )}
    </div>
  );
}

export function ViewExperience({ experiences }) {
  return (
    <div id="view-experience">
      <h1>Experience</h1>
      {experiences.list.map((experience) => {
        return (
          <div className="container" key={experience.id}>
            <h2>{experience.title}</h2>
            <p className="date">{experience.date}</p>
            <p className="location">
              {experience.company} - {experience.city}
            </p>
            <p className="about">{experience.about}</p>
          </div>
        );
      })}
    </div>
  );
}
