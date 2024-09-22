import React from 'react'
import AggregatorSideBar from '../aggregator/aggregatorSideBar';
import RecyclerSideBar from '../recycler/recyclerSideBar';
import AdminSideBar from '../admin/adminSideBar';

const MainSideBar = ({role}) => {

    const sessionUser = role;

  return (
    <>{sessionUser === "admin" ? <AdminSideBar/> : sessionUser === "aggregator" ? <AggregatorSideBar/> : <RecyclerSideBar/> }</>
  )
}

export default MainSideBar