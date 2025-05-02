import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'


const Applyjob = () => {
        const {id} = useParams()    

        const [jobsData, setJobData]= useState(null)

        const {jobs} = useContext(AppContext)

        const fetchJob = async () => {
            const data =jobs.filter(job => job._id === id)
            if (data.length !== 0){
               setJobData(data[0])
               console.log(data[0])
            }
    
        }

        useEffect(() => {
                if(jobs.length > 0){
                fetchJob()
                }

            },[id,jobs])
        
        
            

  return jobsData? (
    <>
      <Navbar/>
      <div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
        <div className='bg-white text-black rounded-lg w-ful'>
            <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20  mb-6 bg-red-50 border border-red-400 rounded-xl'>
                <div  className='flex flex-col md:flex-row items-center'>
                    <img  className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border' src={jobsData.companyId.image} alt="" />
                    <div className='text-center md:text-left text-neutral-700'>
                        <h4 className='text-2xl sm:text-4xl font-medium'>{jobsData.title}</h4>
                        <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-brown-600 mt-2'>
                            <span className='flex items-center gap-1'>
                                <img src={assets.suitcase_icon} alt="" />
                                {jobsData.companyId.name}
                            </span>
                            <span className='flex items-center gap-1'>
                                <img src= {assets.location_icon} alt="" />
                                { jobsData.location}
                            </span>
                            <span className='flex items-center gap-1'>
                                <img src={assets.person_icon} alt="" />
                                {jobsData.level}
                            </span>
                            <span className='flex items-center gap-1'>
                                <img src={assets.money_icon} alt="" />
                                CTC:{kconvert.convertTo( jobsData.salary)}
                            </span>
                        </div>
                    </div>
                </div>
                <div >
                    <button className='bg-blue-600 p-2.5 px-10 text-white rounded'> Apply Now</button>
                    <p  className='mt-1 text-gray-600' > Posted {moment(jobsData.date).fromNow()} </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start'>
             <div className='w-full lg:w-2/3'>
                <h5 className='font-bold text-2xl mb-4'> Job description</h5>
                <div className='rich-text'  dangerouslySetInnerHTML={{__html:jobsData.description}}></div>
                <button className='bg-blue-600 p-2.5 px-10 text-white rounded'> Apply Now</button>
            
            </div>
            {/* Right Section More Jobs */} 
            <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
                <h2>More jobs from {jobsData.companyId.name}</h2>
                {jobs.filter(jobs=> jobs._id !== jobsData._id && jobs.companyId._id=== jobsData.companyId._id)
                .filter(job=> true).slice(0,4)
                .map((jobs,index)=> <JobCard key={index} job={jobs}/>)}
                


            </div>
            
        </div>
     </div>
    </div>
    <Footer/>
    </>
      
    
  ):(
    <Loading/>
  )
}

export default Applyjob
