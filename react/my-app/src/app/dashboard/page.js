import CustomCard from '@/components/card/page'
import React from 'react'

const MainSection = (props) => {
  return (
    <div>
        <CustomCard expenditureToday={props.expenditureToday}/>
    </div>
  )
}

export default MainSection