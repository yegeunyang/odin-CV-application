export default function Skills({ skills, setSkills }) {
  const addSkillHandler = () => {
    setSkills(
      skills.concat([
        { id: crypto.randomUUID(), category: "Wow", skill: "Meh" },
      ]),
    );
  };

  const deleteSkillHandler = function deleteSkillHandlerWrapper(skill) {
    const handler = function () {
      setSkills(skills.filter((s) => s.id !== skill.id));
    };
    return handler;
  };

  const deleteItemHandler = function deleteItemHandlerWrapper(experience) {
    const handler = function () {
      setExperiences({
        ...experiences,
        list: experiences.list.filter((e) => e.id !== experience.id),
      });
    };
    return handler;
  };

  const editSkillHandler = function editSkillHandlerWraper(skill) {
    const handler = function (event) {
      editSkill(event, setSkills, skills, skill);
    };
    return handler;
  };

  return (
    <div id="skills">
      <h1>Skills</h1>
      <hr />
      <form>
        <div className="container">
          <h3>Categories: </h3>
          <h3>Skills: </h3>
        </div>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="container">
              <input
                type="text"
                name="category"
                value={skill.category}
                onChange={editSkillHandler(skill)}
              />
              <input
                type="text"
                name="skill"
                value={skill.skill}
                onChange={editSkillHandler(skill)}
              />
              <button onClick={deleteSkillHandler(skill)}>
                <img src="delete-svgrepo-com.svg"></img>
              </button>
            </div>
          );
        })}
      </form>
      <button onClick={addSkillHandler}>Add Skill</button>
    </div>
  );
}

function editSkill(event, setSkills, skills, skill) {
  if (event.target.name == "category") {
    setSkills(
      skills.map((s) => {
        if (s.id === skill.id) {
          return { id: s.id, category: event.target.value, skill: s.skill };
        } else {
          return s;
        }
      }),
    );
  }

  if (event.target.name == "skill") {
    setSkills(
      skills.map((s) => {
        if (s.id === skill.id) {
          return { id: s.id, category: s.category, skill: event.target.value };
        } else {
          return s;
        }
      }),
    );
  }
}
