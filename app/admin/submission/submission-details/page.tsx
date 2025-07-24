import React from 'react'
import { Submission } from "@/app/types";
import { Award, Clock, XCircle } from 'lucide-react';
import ChallengesTable from '@/app/components/challenges/ChallengaesTable';
const SubmissionDetails: React.FC<{ submission: Submission }> = ({ submission }) => {
    return (
        <div className='px-10 flex flex-col gap-5 mb-5'>
            <div className='text-center flex gap-2 text-xl capitalize justify-center font-semibold'>
                <p className='text-[#F9A826]'># {submission.id}</p>
                <p>{submission.teamName}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">{submission.challengeName}</h2>
                <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1.5">
                        <Clock size={16} /> {submission.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Award size={16} /> {submission.points} Point
                    </span>
                    <span className="flex items-center gap-1.5 text-red-500 font-semibold">
                        <XCircle size={16} /> {submission.status}
                    </span>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">{submission.description}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className='text-[#F9A826] text-lg font-semibold'>Submission</p>
                <p className='text-zinc-600 pt-3'>{submission.submission}</p>
            </div>
            <div className="bg-white p-6  rounded-lg border border-gray-200 ">
                <h3 className="text-xl font-bold text-gray-800">Criteria</h3>
                <p className="text-sm text-gray-500 mt-1 mb-5">Projects will be judged based on:</p>
                <div className='flex flex-col gap-8'>
                    {submission?.criteria.map(cri=>
                        <div key={cri.text} className='flex justify-between'>
                            <div className='flex gap-5'>
                                <p>{cri.text}</p>
                                <p className='text-[#F9A826] font-semibold'>{cri.points} Point</p>
                            </div>
                            <form className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <label className='text-[#F9A826]'>True</label>
                                    <input type="radio" name='validate' value='true' className=' checked:appearance-none checked:bg-[#F9A826] w-4 h-4 rounded-full'/>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <label className='text-[#F9A826]'>False</label>
                                    <input type="radio" name='validate' value='false' className=' checked:appearance-none checked:bg-[#F9A826] w-4 h-4 rounded-full'/>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            <button className='text-center p-3 rounded-2xl bg-[#F9A826] w-1/3 mx-auto text-white font-semibold'>Confirm</button>
        </div>
    )
}

export default SubmissionDetails