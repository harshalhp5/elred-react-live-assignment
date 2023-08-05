import React, { useState } from 'react'
import EditSkill from './EditSkill';

const Skills = () => {

    const [showEditSkills, setShowEditSkills] = useState(false);
    const [skillsData, setSkillsData] = useState({
        skills: [],
        hobbies: [],
        subjects: [],
    })

    
    const handleEdit = () => {
        setShowEditSkills(true);
    }

    return (
        <div>
            {showEditSkills ? (
                <EditSkill
                    skillsData={skillsData}
                    setSkillsData={setSkillsData}
                    setShowEditSkills={setShowEditSkills}
                />
            ) : (
                    <>
                        <h4>Skills:</h4>
                        <h4>Hobbies:</h4>
                        <h4>Subjects:</h4>
                        <div>
                            <button onClick={handleEdit}>Edit</button>
                        </div>
                    </>
            )}
        </div>
    )
}

export default Skills;
