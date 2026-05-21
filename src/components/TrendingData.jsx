import { fetchTrendingData } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import IdeaCard from './IdeaCard';

const TrendingData = async() => {
    const trendingIdeas = await fetchTrendingData();
    return (
        <div className='container mx-auto my-10'>
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-5xl font-bold'>Trending Ideas</h2>
                <Link href={`/ideas`}><Button variant='outline' className={` rounded-none border-none text-[#155dfc]`}>View All <GoArrowRight /></Button></Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    trendingIdeas.map(idea => <IdeaCard key={idea._id} idea={idea}/>)
                }
            </div>
        </div>
    );
};

export default TrendingData;