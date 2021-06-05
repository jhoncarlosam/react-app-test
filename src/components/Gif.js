import React from 'react'

export default function Gif ({ title, id, url }) {
    return (
        <div>
            <h4>{title}</h4>
            <span>{id}</span>
            <img alt={title} src={url}></img>
        </div>
    )
}