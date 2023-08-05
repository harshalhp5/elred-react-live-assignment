import React, { useEffect, useState } from 'react'

const EditSkill = (props) => {
    const {
        skillsData,
        setSkillsData,
        setShowEditSkills
    } = props;

    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [skillsList, setSkillsList] = useState([]);
    const [hobbiesList, setHobbiesList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);
    
    useEffect(() => {
        let skillsAPI = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json";
        let hobbiesAPI = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json";
        let subjectsAPI = "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json";

        fetch(skillsAPI)
            .then((response) => response.json())
            .then((data) => setSkillsList(data.result[0]));
        
        fetch(hobbiesAPI)
            .then((response) => response.json())
            .then((data) => setHobbiesList(data.result[0]));
        
        fetch(subjectsAPI)
            .then((response) => response.json())
            .then((data) => setSubjectsList(data));
        
    }, [])

    // console.log({ skillsList });
    // console.log({ hobbiesList });
    console.log({ subjectsList });
    
    // console.log(skillsList.skills.map((skill) => skill));
    
    return (
        <div>
            <h4>Edit :</h4>
            <label>Skills :</label>
            <select
                multiple
                value={selectedSkills}
                onChange={(e) => setSelectedSkills(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {skillsList.skills.map((skill) => (
                    <option key={skill} value={skill.value}>
                        {skill.value}
                    </option>
                ))}
            </select>
            {/* <label>Hobbies :</label>
            <select
                multiple
                value={selectedHobbies}
                onChange={(e) => setSelectedHobbies(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {hobbiesList.hobbies.map((hobby) => (
                    <option key={hobby} value={hobby.value}>
                        {hobby.value}
                    </option>
                ))}
            </select> */}
            {/* <label>Subjects :</label>
            <select
                multiple
                value={selectedSubjects}
                onChange={(e) => setSelectedSubjects(Array.from(e.target.selectedOptions, (option) => option.value))}
            >
                {subjectsList.subjects.map((skill) => (
                    <option key={skill} value={skill.value}>
                        {skill.value}
                    </option>
                ))}
            </select> */}
        </div>
    )
}

export default EditSkill;
