import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from './Card';




const Item = () => {
    const breakPoints =[
        {width: 1, itemToShow :1},
        {width: 550, itemToShow:2},
        {width: 762,itemToShow: 3 },
        {width: 1200, itemToShow: 4 }
    ]
  return (
    <div>
       
        <Carousel itemsToShow={3}  >
         <Card>One</Card>
         <Card>Two</Card>
         <Card>Three</Card>
         <Card>four</Card>
         <Card>five</Card>
         <Card>six</Card>
         <Card>seven</Card>
         <Card>eight</Card>
         <Card>nine</Card>
        </Carousel>
      

    </div>
  )
}

export default Item