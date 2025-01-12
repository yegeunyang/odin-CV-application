export default function PersonalDetails({
  personalDetails,
  setPersonalDetails,
  setPicture,
}) {
  function changePictureHandler(event) {
    if (event.target.files.length !== 0) {
      setPicture(URL.createObjectURL(event.target.files[0]));
    }
  }

  function editPersonalDetailsHandler(event) {
    switch (event.target.id) {
      case "firstName":
        setPersonalDetails({
          ...personalDetails,
          firstName: event.target.value,
        });
        break;
      case "lastName":
        setPersonalDetails({
          ...personalDetails,
          lastName: event.target.value,
        });
        break;
      case "email":
        setPersonalDetails({ ...personalDetails, email: event.target.value });
        break;
      case "phone":
        setPersonalDetails({ ...personalDetails, phone: event.target.value });
        break;
      case "address":
        setPersonalDetails({ ...personalDetails, address: event.target.value });
        break;
      case "occupation":
        setPersonalDetails({
          ...personalDetails,
          occupation: event.target.value,
        });
        break;
      case "linkedin":
        setPersonalDetails({
          ...personalDetails,
          linkedin: event.target.value,
        });
        break;
      case "github":
        setPersonalDetails({ ...personalDetails, github: event.target.value });
        break;
      case "about":
        setPersonalDetails({ ...personalDetails, about: event.target.value });
        break;
    }
  }

  return (
    <div id="personal-details">
      <h1>Personal Details</h1>
      <hr />
      <form>
        <div className="container">
          <div className="card">
            <label>First name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={personalDetails.firstName}
              onChange={editPersonalDetailsHandler}
            />
          </div>
          <div className="card">
            <label>Last name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={personalDetails.lastName}
              onChange={editPersonalDetailsHandler}
            />
          </div>
        </div>
        <div className="container">
          <div className="card">
            <label>E-mail: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={personalDetails.email}
              onChange={editPersonalDetailsHandler}
            />
          </div>
          <div className="card">
            <label>Phone: </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={personalDetails.phone}
              onChange={editPersonalDetailsHandler}
            />
          </div>
        </div>
        <div className="container">
          <div className="card">
            <label>Address: </label>
            <input
              type="text"
              id="address"
              name="address"
              value={personalDetails.address}
              onChange={editPersonalDetailsHandler}
            />
          </div>
          <div className="card">
            <label>Occupation: </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={personalDetails.occupation}
              onChange={editPersonalDetailsHandler}
            />
          </div>
        </div>
        <div className="container">
          <div className="card">
            <label>LinkedIn: </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={personalDetails.linkedin}
              onChange={editPersonalDetailsHandler}
            />
          </div>
          <div className="card">
            <label>Github: </label>
            <input
              type="text"
              id="github"
              name="github"
              value={personalDetails.github}
              onChange={editPersonalDetailsHandler}
            />
          </div>
        </div>
        <div className="container">
          <div className="card">
            <label>About: </label>
            <textarea
              id="about"
              rows="4"
              value={personalDetails.about}
              onChange={editPersonalDetailsHandler}
            />
          </div>
        </div>
        <div className="container" id="picture">
          <div className="card">
            <label>Profile Picture: </label>
            <input
              type="file"
              name="profilePicture"
              onChange={changePictureHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export function ViewPicture({ picture }) {
  return (
    <img src={picture} alt="Picture cannot be displayed" id="view-picture" />
  );
}

export function ViewContact({ personalDetails }) {
  return (
    <div id="view-contact">
      <h2>Contact</h2>
      <ul>
        <li>
          Email <br /> <span>{personalDetails.email}</span>
        </li>
        <li>
          Phone <br /> <span>{personalDetails.phone}</span>
        </li>
        <li>
          Address <br /> <span>{personalDetails.address}</span>
        </li>
        {personalDetails.linkedin.length != 0 && (
          <li>
            LinkedIn <br /> <span>{personalDetails.linkedin}</span>
          </li>
        )}
        {personalDetails.github.length != 0 && (
          <li>
            Github <br /> <span>{personalDetails.github}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export function ViewIntro({ personalDetails }) {
  return (
    <div id="view-intro">
      <h1>
        {personalDetails.firstName} <span> {personalDetails.lastName}</span>{" "}
      </h1>
      <h2>{personalDetails.occupation}</h2>
      <p>{personalDetails.about}</p>
    </div>
  );
}
