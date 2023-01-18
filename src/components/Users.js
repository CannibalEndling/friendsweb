import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUsers from './SingleUsers'
import './Users.css'

const Users = () => {
    const [page, setPage] = useState(1)
    const [usestData, setUsestData] = useState(null)
    const [loading, setLoading] = useState(false)

    const getData = async() => {
        setLoading(true)
        try {
            const resData = await axios.get('https://reqres.in/api/users?', {params: {
                page: page
            }})
            setUsestData(resData.data.data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [page])

  return (
    <div className='Users'>
        <div className='SingleUsers'>
            { usestData === null ? (<p>Loading</p>) : (
                usestData.map((el) => (
                    <SingleUsers
                         key={el.id}
                        id={el.id}
                        email={el.email}
                        first_name={el.first_name}
                        last_name={el.last_name}
                        avatar={el.avatar}
                    />
                ))
            ) }
        </div>
        <button className="Load"
            onClick={() => setPage(page+1)}
        >
            Load More
        </button>
    </div>
  )
}

export default Users