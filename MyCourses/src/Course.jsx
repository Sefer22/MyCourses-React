import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div className='course'>
                <img src={image} width={250} height={150} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3>{price}</h3>
                <a href={link}>For buying</a>
            </div>

        </div>
    )
}

export default Course