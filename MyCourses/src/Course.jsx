import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div className='course'>
                <img src={image} width={355} height={150} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} AZN</h3>
                <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>For buying</a></div>
            </div>

        </div>
    )
}

export default Course