import React from 'react'
import Image from 'next/image'

export default function Daily() {
	return (
		<div className='flex w-[1083px] h-[221px] relative bg-[#101010] rounded-[20px]'>
			<div className='absolute'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='189'
					height='220'
					viewBox='0 0 189 220'
					fill='none'
				>
					<path
						d='M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z'
						fill='#1C1C1C'
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='142'
					height='115'
					viewBox='0 0 142 115'
					fill='none'
					className='absolute bottom-0'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M141.739 67.2027L128.78 115H20C8.9543 115 0 106.046 0 95V17.2623C15.0458 6.40044 33.5254 0 53.5 0C95.6215 0 131.095 28.4618 141.739 67.2027Z'
						fill='#232323'
					/>
				</svg>
			</div>
			<span className='text-[#EDEDED] top-[40px] left-[28px] font-bold absolute leading-4 text-base'>
				Daily
				<br /> Quests
			</span>
			<div className='h-full flex relative left-[204.5px] items-center'>
				<div className='flex flex-col items-center '>
					<div className='w-[135px] h-[135px] flex  justify-center items-center rounded-full border-[#5C5C5C] border-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='123'
							height='124'
							viewBox='0 0 123 124'
							fill='none'
							className='absolute'
						>
							<circle
								opacity='0.5'
								cx='61.5'
								cy='62.3037'
								r='61.25'
								fill='black'
								stroke='#5C5C5C'
								stroke-width='0.5'
							/>
						</svg>
						<div className='w-[79px] h-[40px] flex justify-center items-center rounded-[12px] bg-[rgba(10, 10, 10, 0.40)] border-2 border-[#6F6F6F] text-[#6F6F6F] text-sm relative'>
							Claimed
						</div>
					</div>

					<div className='flex mt-[20px]'>
						<Image height={20} width={20} src='/imgs/Sphere4.png' alt='' />
						<span className='text-[#fff] ml-[4px] text-sm'>25</span>
					</div>
				</div>

				<div className='w-[106px] h-[1px] bg-[#fff] relative bottom-[20px]'></div>
				<div className='flex flex-col items-center'>
					<div className='w-[135px] h-[135px] flex flex-col justify-center items-center rounded-full border-[#5C5C5C] border-2 relative'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='123'
							height='124'
							viewBox='0 0 123 124'
							fill='none'
							className='absolute'
						>
							<circle
								cx='61.5'
								cy='62.3037'
								r='61.25'
								fill='white'
								stroke='#5C5C5C'
								stroke-width='0.5'
							/>
						</svg>
						<span className='text-sm text-[#030303] relative'>
							Complete
							<br /> 10 Quest
						</span>
						<span className='text-xs text-[#030303] relative mt-[11px]'>
							6/10
						</span>
					</div>
					<div className='flex mt-[20px]'>
						<Image height={20} width={20} src='/imgs/Sphere4.png' alt='' />
						<span className='text-[#fff] ml-[4px] text-sm'>25</span>
					</div>
				</div>
				<div className='w-[106px] h-[1px] bg-[#fff] relative bottom-[20px]'></div>
				<div className='flex flex-col items-center'>
					<div className='w-[135px] h-[135px] flex flex-col justify-center items-center rounded-full border-[#5C5C5C] border-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='123'
							height='124'
							viewBox='0 0 123 124'
							fill='none'
							className='absolute'
						>
							<circle
								opacity='0.5'
								cx='61.5'
								cy='62.3037'
								r='61.25'
								fill='black'
								stroke='#5C5C5C'
								stroke-width='0.5'
							/>
						</svg>
						<span className='text-sm text-[#EDEDED] relative'>
							Complete
							<br /> 10 Quest
						</span>
						<span className='text-xs text-[#EDEDED] relative mt-[11px]'>
							6/10
						</span>
					</div>
					<div className='flex mt-[20px]'>
						<Image height={20} width={20} src='/imgs/Sphere4.png' alt='' />
						<span className='text-[#fff] ml-[4px] text-sm'>25</span>
					</div>
				</div>

				<div className='flex flex-col justify-center ml-[59.2px]'>
					<div className='w-[143px] h-[39px]  text-xs rounded-[12px] bg-white flex justify-center items-center cursor-pointer'>
						Claim
					</div>
					<div className='w-[143px] h-[39px] text-[#fff] text-xs rounded-[12px] bg-gradient-to-r from-[#353535] to-[#2E2E2E] flex justify-center items-center cursor-pointer mt-[12px]'>
						Start Learning
					</div>
				</div>
			</div>
		</div>
	)
}
