export default function Skills({ skills, setSkills }) {
  const addSkillHandler = () => {
    setSkills(
      skills.concat([{ id: crypto.randomUUID(), category: "", item: "" }]),
    );
  };

  const deleteSkillHandler = function deleteSkillHandlerWrapper(skill) {
    const handler = function () {
      setSkills(skills.filter((item) => item.id !== skill.id));
    };
    return handler;
  };

  const editSkillHandler = function editSkillHandlerWraper(skill) {
    const handler = function (event) {
      setSkills(
        skills.map((item) => {
          if (item.id === skill.id) {
            if (event.target.name == "category") {
              return {
                id: item.id,
                category: event.target.value,
                skill: item.skill,
              };
            }

            if (event.target.name == "skill") {
              return {
                id: item.id,
                category: item.category,
                item: event.target.value,
              };
            }
          } else {
            return item;
          }
        }),
      );
    };
    return handler;
  };

  return (
    <div id="skills">
      <h1>Skills</h1>
      <hr />
      <form>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="container">
              <input
                type="text"
                className="category"
                name="category"
                placeholder="Category"
                value={skill.category}
                onChange={editSkillHandler(skill)}
              />
              <input
                type="text"
                className="skill"
                name="skill"
                placeholder="Skills"
                value={skill.item}
                onChange={editSkillHandler(skill)}
              />
              <button onClick={deleteSkillHandler(skill)}>
                <img src="delete-1-svgrepo-com-2.svg"></img>
              </button>
            </div>
          );
        })}
      </form>
      <button onClick={addSkillHandler}>+ Add Skill</button>
    </div>
  );
}

export function ViewSkills({ skills }) {
  return (
    <div id="view-skills">
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.category} <span>{skill.item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
