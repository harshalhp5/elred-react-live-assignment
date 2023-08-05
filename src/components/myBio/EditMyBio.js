import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const EditMyBio = (props) => {

    const {
        bioData,
        setBioData,
        showEditScreen,
        setShowEditScreen,
    } = props;

    const [aboutMe, setAboutMe] = useState(bioData.aboutMe);
    const [bloodGroup, setBloodGroup] = useState(bioData.bloodGroup);
    const [resume, setResume] = useState(bioData.resume);
    const [error, setError] = useState("");

    const bloodGroupTypes = ["A +ve", "A -ve", "B +ve", "B -ve", "AB +ve", "AB -ve", "O +ve", "O -ve"]

    // const handleResumeChange = (e) => {

    //     const file = e.target.files[0];

    //     if (file && file.type === "application/pdf" && file.size <= 5242880) {
    //         setResume(file);
    //         setError("");
    //     } else {
    //         setError("File size exceeds 5 MB. Please upload a smaller PDF.")
    //     }
    // }

    const handleSave = () => {

        if (aboutMe.length < 3 || aboutMe.length > 500) {
            setError("About me should be between 3 and 500 characters.")
            return;
        }

        if (!bloodGroup) {
            setError("Please select a Blood Group Type from the List.")
        }

        if (resume) {
            let allowedType = ['application/pdf'];
            let maxFileSize = 5 * 1024 * 1024;
            if (!allowedType.includes(resume.type)) {
                setError("Please select a PDF File only.")
                return;
            }
            if (resume.size >= maxFileSize) {
                setError("File size exceeds 5 MB. Please upload a smaller PDF.")
                return;
            }
        }

        setBioData({ aboutMe, bloodGroup, resume });
        setShowEditScreen(false);
 
    }

    return (
        <div>
            <Form>
                <Form.Group controlId='aboutMe'>
                    <Form.Label>About Me</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId='bloodGroup'>
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                        as="select"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    >
                    {bloodGroupTypes.map((type) => (
                        <option key={type.index} value={type}>{ type }</option>
                    ) )}
                    {/* <option value={"A +ve"}>A +ve</option>
                    <option value={"A -ve"}>A -ve</option>
                    <option value={"B +ve"}>B +ve</option>
                    <option value={"B -ve"}>B -ve</option>
                    <option value={"AB +ve"}>AB +ve</option>
                    <option value={"AB -ve"}>AB -ve</option>
                    <option value={"O +ve"}>O +ve</option>
                    <option value={"O -ve"}>O -ve</option> */}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='resume'>
                    <Form.Label>Resume</Form.Label>
                    <Form.Control
                        type="file"
                        accept='application/pdf'
                        onChange={(e) => setResume(e.target.files[0])}
                    />
                </Form.Group>
            </Form>
            {error && (
                <p style={{color: "red"}}>
                    error
                </p>
            )}
            <button onClick={handleSave} type='submit'>Save</button>
        </div>
    )
}

export default EditMyBio;
