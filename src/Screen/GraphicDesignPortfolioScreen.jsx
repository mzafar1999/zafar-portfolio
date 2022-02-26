import React, { useState } from 'react'
import styled from 'styled-components'
import GraphicDesignCard from '../components/graphicdesign/GraphicDesignCard'
import GraphicDesignCarousel from '../components/graphicdesign/GraphicDesignCarousel '

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const data = [{
    id:1,
    image:'/images/gdp_images/snake_and_ladders.jpg',
    title:'Snake and Ladders board'
},

{
    id:2,
    image:'/images/gdp_images/1.jpg',
    title:'Mercedes'
}
]



const GraphicDesignPortfolioScreen = () => {
 
    return (
        <Container>
            {data.map((item)=>{
                return (
                     <GraphicDesignCard key={item.id} id={item.id} image={item.image} title={item.title}  />
                )
            })}
        </Container>
    )
}

export default GraphicDesignPortfolioScreen
