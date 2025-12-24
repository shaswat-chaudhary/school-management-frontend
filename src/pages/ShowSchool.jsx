import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card';
import axios from 'axios'

export const ShowSchool = () => {

  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('')

  console.log(schoolData)

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://school-management-backend-production-7b68.up.railway.app/api/schools");
      setSchoolData(res?.data);
    } catch (error) {
      console.log(error);
      setErr("Failed To Fetch Data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchApi();
  }, [])

  if (loading) return <p className='flex items-center justify-center min-h-screen font-bold text-2xl'>Loading..</p>

  return (
    <div className='w-full'>
      <h1 className='sm:text-4xl text-2xl font-bold p-4'>School List</h1>

      <div className='max-w-7xl mx-auto'>
        {schoolData.length === 0 ? (
          <p>No School Found</p>
        ) : (
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mx-6'>
            {
              schoolData.map((item, index) => (
                <Card
                  key={index}
                  item={item}
                />
              ))
            }
          </div>
        )}

      </div>
    </div>
  )
}
