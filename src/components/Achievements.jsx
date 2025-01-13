export default function Achievements({ achievements, setAchievements }) {
  const addAchievementHandler = (event) => {
    // Prevent refresh
    event.preventDefault();

    // Update achievements: state
    setAchievements([
      ...achievements,
      { id: crypto.randomUUID(), item: event.target.content.value },
    ]);

    // Reset the text field
    event.target.reset();
  };

  const deleteAchievementHandler = function deleteAchievementHandlerWrapper(
    achievement,
  ) {
    const handler = function () {
      setAchievements(
        achievements.filter((item) => item.id !== achievement.id),
      );
    };
    return handler;
  };

  return (
    <div id="achievements">
      <h1>Achievements</h1>
      <hr />
      <form onSubmit={addAchievementHandler}>
        <input type="text" placeholder="Enter" name="content"></input>
      </form>
      <div className="container">
        {achievements.map((achievement) => {
          return (
            <button
              key={achievement.id}
              onClick={deleteAchievementHandler(achievement)}
            >
              {achievement.item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
