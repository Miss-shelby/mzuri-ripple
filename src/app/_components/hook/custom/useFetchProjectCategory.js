import React, { useState } from 'react'
import { getCategory } from '../../Apis/api'

const useFetchProjectCategory = ({projectCategoryId}) => {
    const [projectCategory,setProjectCategory] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchCategory   = async ()=>{
        setLoading(true)
        try{
          const response = await fetch(`${getCategory}/category?category=${projectCategoryId}`)
          const data = await response.json()
          if(response.status=== 200){
            setProjectCategory(data.data)
            setLoading(false)
          }
        }catch(error){
         setLoading(false)
        }
    }
      return {loading,projectCategory,fetchCategory}
}

export { useFetchProjectCategory}
