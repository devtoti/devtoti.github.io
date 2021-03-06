import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/projects.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Chip from '@mui/material/Chip';
import { medizenLabels } from './Projects'
import { useState, useEffect } from 'react';

export default function ProjectCard(props, { lbls }) {
    const { name, description, img, url, repo, id, labels } = props

    const router = useRouter()
    const sendToPage = (e) => {
        e.preventDefault()
        window.open(url, "_blank")
    }
    const sendToGithub = (e) => {
        e.preventDefault()
        if (repo.includes('xavier')) return 
        window.open(`https://github.com/devtoti/${repo}`, "_blank")
    }


    const [newLabel, setNewLabel] = useState([])
    useEffect(() => {
        setNewLabel(labels)
        // console.log(labels)
    }, [labels])

    const displayLables = labels => {
        // console.log(labels)
        const obj = { ...labels }
        // console.log(Object.values(obj))
        // console.log(Array.isArray(labels))
        return labels.map((el, id) => 
            <p id={id} key={id}>{el}</p>)
    }

    return (
        <div className={styles.proyect} id={name}>
            <h3>{name}</h3>
            <div className="content">
                {/* <div className="image" style={{ position: "relative" }}>
                    <Image
                        src={img}
                        alt="`project ${name} illustration"
                        layout='fill'
                        objectFit='contain'
                    />
                </div> */}
                <p>{description}</p>
            </div>
            <div className="chips">
                <div className="labels">
                {displayLables(newLabel)}

                </div>
                <div className="links">

                    <h4 onClick={sendToPage}>
                        <LinkIcon />
                    </h4>
                    <h4 onClick={sendToGithub}>
                        <GitHubIcon />
                    </h4>
                </div>
            </div>


        </div>
    )
}


// export async function getStaticProps(medizenLabels) {
//     const lbls = medizenLabels
//     return {
//         props: {
//             lbls
//         }
//     }
//   }