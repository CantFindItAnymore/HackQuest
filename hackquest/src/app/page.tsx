// import Image from 'next/image'

import Avatar from '@/components/Avatar'
import Daily from '@/components/Daily'
import Milestones from '@/components/Milestones'

export default function Home() {
	return (
		<main className='w-[1600px] h-[801px] bg-[#010101] py-[120px] px-[80px] flex'>
			<Avatar />
			<div className='ml-[12px]'>
				<Daily />
				<div className='mt-[12px]'>
					<Milestones />
				</div>
			</div>
		</main>
	)
}
