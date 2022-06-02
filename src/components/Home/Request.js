import React from 'react'
import Table3 from './Table3';
import LocNav from './LocNav';

function Request() {
  return (
    <div>
        <LocNav batch="Request" val={false}/>
        <Table3 />
    </div>
  )
}

export default Request