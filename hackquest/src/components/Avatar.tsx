import React from 'react'

export default function Avatar() {
	return (
		<div className='w-[345px] h-[561px] rounded-[20px] p-[37px] bg-[#101010] shrink-0 flex flex-col items-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='103'
				height='102'
				viewBox='0 0 103 102'
				fill='none'
			>
				<circle cx='51.5' cy='51' r='51' fill='#D9D9D9' />
			</svg>
			<span className='text-[#EDEDED] mt-[20px] text-xl font-bold'>
				Carina Geng
			</span>
			<div className='flex flex-row items-center mt-[12px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
				>
					<circle cx='10' cy='10' r='10' fill='#D9D9D9' />
				</svg>
				<span className='text-[#EDEDED] text-xs ml-[8px] mr-[20px]'>
					Level 3
				</span>
				<div className='flex justify-center items-center cursor-pointer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						className='absolute'
					>
						<circle
							cx='10'
							cy='10'
							r='9.51875'
							stroke='#828282'
							stroke-width='0.9625'
						/>
					</svg>
					<span className='text-[#828282] text-xs'>?</span>
				</div>
			</div>
			<div className=' h-[42px] mt-[56px] flex'>
				<div className='flex  flex-col items-center'>
					<span className='text-[#7D7D7D] text-xs mb-[12px]'>Today’s XP</span>
					<span className='text-[#EDEDED] text-base font-bold'>50</span>
				</div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='13'
					height='44'
					viewBox='0 0 13 44'
					fill='none'
					className='mx-[32px]'
				>
					<path d='M12 1L1 43' stroke='#7D7D7D' />
				</svg>
				<div className='flex flex-col items-center'>
					<span className='text-[#7D7D7D] text-xs mb-[12px]'>Total XP</span>
					<span className='text-[#EDEDED] text-base font-bold'>750/800</span>
				</div>
			</div>
			<div className='flex items-center  mt-[56px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='69'
					height='69'
					viewBox='0 0 69 69'
					fill='none'
					style={{ marginRight: '-23px' }}
				>
					<circle cx='34.5' cy='34.5' r='34.5' fill='#444444' />
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='92'
					height='92'
					viewBox='0 0 92 92'
					fill='none'
					style={{ zIndex: '9' }}
				>
					<circle cx='46' cy='46' r='46' fill='#D9D9D9' />
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='69'
					height='69'
					viewBox='0 0 69 69'
					fill='none'
					style={{ marginLeft: '-23px' }}
				>
					<circle cx='34.5' cy='34.5' r='34.5' fill='#444444' />
				</svg>
			</div>
			<div className='w-[145px] h-[40px] mt-[24px] rounded-[12px] flex justify-center items-center bg-gradient-to-r from-[#353535] to-[#2E2E2E] cursor-pointer text-[#EDEDED] text-sm'>
				View all badges
			</div>
		</div>
	)
}
