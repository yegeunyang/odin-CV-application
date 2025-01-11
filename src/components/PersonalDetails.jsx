import { useState } from 'react'

import '../styles/styles.css'

function PersonalDetails() {
    const [data, setData] = useState({
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@icloud.com",
        phone: "(608) ope-1234",
        address: "Madison, Wsiconsin",
        occupation: "Cheese Logger",
        linkedin: "https://linkedin.com/",
        github: "https://github.com",
        about: "The best cheese logger in Wisconsin.",
        picture: null
    });

    const handler = null;

    return (
        <div id="personal-details">
        <h1>Personal Details</h1>
        <hr />
        <form>
            <div className="container">
            <div className="card">
                <label>First name: </label>
                <input type="text" name="firstName" defaultValue={data.firstName} onChange={handler} />
            </div>
            <div className="card">
                <label>Last name: </label>
                <input type="text" name="lastName" defaultValue={data.lastName} onChange={handler} />
            </div>
            </div>
            <div className="container">
            <div className="card">
                <label>E-mail: </label>
                <input type="text" name="email" defaultValue={data.email} onChange={handler} />
            </div>
            <div className="card">
                <label>Phone: </label>
                <input type="text" name="phone" defaultValue={data.phone} onChange={handler} />
            </div>
            </div>
            <div className="container">
            <div className="card">
                <label>Address: </label>
                <input type="text" name="address" defaultValue={data.address} onChange={handler} />
            </div>
            <div className="card">
                <label>Occupation: </label>
                <input type="text" name="occupation" defaultValue={data.occupation} onChange={handler} />
            </div>
            </div>
            <div className="container">
            <div className="card">
                <label>LinkedIn: </label>
                <input type="text" name="linkedin" defaultValue={data.linkedin} onChange={handler} />
            </div>
            <div className="card">
                <label>Github: </label>
                <input type="text" name="github" defaultValue={data.github} onChange={handler} />
            </div>
            </div>
            <div className="container">
            <div className="card">
                <label>About: </label>
                <textarea rows="4" defaultValue={data.about} onChange={handler} />
            </div>
            </div>
            <div className="container" id="picture">
            <div className="card">
                <label>Profile Picture: </label>
                <input type="file" name="profilePicture" onChange={handler} />
            </div>
            </div>
        </form>
        </div>
    );
}

export default PersonalDetails;