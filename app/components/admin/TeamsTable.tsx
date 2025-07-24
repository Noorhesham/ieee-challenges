import Link from 'next/link'
import React from 'react'

function TeamsTables() {
    return (
        <div className="mt-5 px-10">
            <div className="flex justify-between text-xl font-semibold mb-5">
                <p>Team</p>
                <p>Category</p>
                <p>Signed Time</p>
            </div>
            
            <div className='flex flex-col text-lg text-zinc-400 '>
                
                <Link href='/admin/team-profile' className='flex flex-col gap-5 hover:bg-gray-100 transition-colors'>
                    <hr className='text-gray-300'/>
                    <div className="flex justify-between pb-5">
                        <p>Team name</p>
                        <p>Data Science</p>
                        <p>02/05/2025</p>
                    </div>
                </Link>
                <Link href='/admin/team-profile' className='flex flex-col gap-5 hover:bg-gray-100 transition-colors'>
                    <hr className='text-gray-300'/>
                    <div className="flex justify-between pb-5">
                        <p>Team name</p>
                        <p>Data Science</p>
                        <p>02/05/2025</p>
                    </div>
                </Link>
                <Link href='/admin/team-profile' className='flex flex-col gap-5 hover:bg-gray-100 transition-colors'>
                    <hr className='text-gray-300'/>
                    <div className="flex justify-between pb-5">
                        <p>Team name</p>
                        <p>Data Science</p>
                        <p>02/05/2025</p>
                    </div>
                </Link>
                <Link href='/admin/team-profile' className='flex flex-col gap-5 hover:bg-gray-100 transition-colors'>
                    <hr className='text-gray-300'/>
                    <div className="flex justify-between pb-5">
                        <p>Team name</p>
                        <p>Data Science</p>
                        <p>02/05/2025</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default TeamsTables