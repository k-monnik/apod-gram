import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import Button from './Button';


const apiKey = process.env.REACT_APP_NASA_KEY;




export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();

            setPhotoData(data);

            console.log(data);
        }
    }, []);

    if (!photoData) return <div />

    return (
        <>
            <NavBar />
            <div className="card">
                {photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title} className="photo" />
                ) : (
                    <iframe
                        title="space-video"
                        src={photoData.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="photo"
                    />
                )}
                <div>
                    <h1 className="title">{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
                <div>
                    <Button />
                </div>


            </div>
        </>
    )
}