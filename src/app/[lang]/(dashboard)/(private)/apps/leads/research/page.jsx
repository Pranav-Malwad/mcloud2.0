import React from 'react'
import ResearchList from '../../../../../../../views/apps/leads/research/list'
import { getResearchData } from '../../../../../../server/actions'
const ResearchPage = () => {

  const data2 = getResearchData()
  return (
    <div>
      {/* <h1>#Research</h1> */}
      <ResearchList  researchData = {data2} />
    </div>
  )
}

export default ResearchPage

