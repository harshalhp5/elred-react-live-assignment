import React, { useState } from 'react'
import EditMyBio from './EditMyBio';
import { UilEdit } from '@iconscout/react-unicons';
import { UilAngleRightB } from '@iconscout/react-unicons';
import { UilImageEdit } from '@iconscout/react-unicons';

const MyBio = () => {

    const [showEditScreen, setShowEditScreen] = useState(false);

    const [bioData, setBioData] = useState({
        aboutMe: "",
        bloodGroup: "",
        resume: null,
    })

    const handleEdit = () => {
        setShowEditScreen(true);
    }

    console.log({bioData});

    return (
        <div>
            {showEditScreen ? (
                <EditMyBio
                    bioData={bioData}
                    setBioData={setBioData}
                    showEditScreen={showEditScreen}
                    setShowEditScreen={setShowEditScreen}
                />
            ) : (
                <div >
                    <div
                        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
                    >
                        <h4>About Me: {bioData.aboutMe}</h4>
                        <UilEdit size="20" color="#61DAFB" onClick={handleEdit} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{borderBottom : "1px solid gray", padding: "0.7rem"}}>
                                {!bioData.aboutMe ? (
                                    <>
                                        No about me added yet
                                    </>
                                ): (
                                    <>
                                        {bioData.aboutMe}
                                    </>
                            )}
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <p>Blood Group</p>
                                <p>{bioData.bloodGroup}</p>
                        </div>
                        {bioData.resume ? (
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", border: "1px solid lightgray", borderRadius: "8px" }}>
                                    <p><UilImageEdit size="40" color="#61DAFB"/>Resume</p>
                                    <UilAngleRightB size="20" color="#61DAFB"/>
                            </div>
                        ) : (
                            <>
                                <h5>No resume found</h5>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyBio