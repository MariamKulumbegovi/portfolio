import React from 'react'
import './Skills.css'
export const Skills = () => {
    const skills = [
        {
            perc: '100%',
            txt: 'HTML'
        },
        {
            perc: '100%',
            txt: 'CSS'
        },
        {
            perc: '100%',
            txt: 'Javascript'
        },
        {
            perc: '100%',
            txt: 'ReactJS'
        },
        {
            perc: '70%',
            txt: 'NextJS'
        },
        {
            perc: '60%',
            txt: 'React Native'
        },
        {
            perc: '98%',
            txt: 'TypeScript'
        },
        {
            perc: '100%',
            txt: 'Redux'
        },
        {
            perc: '100%',
            txt: 'Redux Toolkit'
        },
        {
            perc: '100%',
            txt: 'React Query'
        },
        {
            perc: '80%',
            txt: 'Apollo Client'
        },
        {
            perc: '100%',
            txt: 'XD'
        },
        {
            perc: '100%',
            txt: 'Figma'
        },
        {
            perc: '100%',
            txt: 'Antd'
        },
        {
            perc: '100%',
            txt: 'Material UI'
        },
    ]
    return (
        <div className='mainskills'>
            {skills.map(s =>
                <div className='skillswrap'>
                    <span className="perc">{s.perc}</span>
                    <span className="sk">{s.txt}</span>
                </div>
            )}

        </div>
    )
}
