import React from 'react'

const WorksItem = ({item}) => {
  return (
    <div className="work-card" key={item.id}>
        <img src={item.image} alt="" className='work-img' />
        <h3 className="work-title">{item.title}</h3>
        <h3 className="work-subtitle">{item.subtitle}</h3>
        <a href={item.url} target='_blank' className="work-button">
            Demo <i className="bx bx-right-arrow-alt work-button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItem