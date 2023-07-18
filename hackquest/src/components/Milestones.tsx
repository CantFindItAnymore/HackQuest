'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './common/Tab'

export default function Milestones() {
	const [active, setActive] = useState('Course Completion')
	const createlist = () => {
		return [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
			return (
				<div
					key={index}
					className='w-[1000px] h-[52px] bg-[#202020] rounded-[16px] flex items-center mb-[12px] px-[6px]'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='162'
						height='53'
						viewBox='0 0 162 53'
						fill='none'
					>
						<path
							d='M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z'
							fill='#292929'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z'
							fill='#232323'
						/>
					</svg>
					<span className='text-white ml-[17.5px] text-sm break-all'>
						Complete 3 Syntax
					</span>

					<div className='w-[40px] ml-[60px] flex items-center'>
						<Image height={20} width={20} src='/imgs/Sphere4.png' alt='' />
						<span className='text-white ml-[4px] text-sm inline-block align-middle'>
							{Math.ceil(Math.random() * 100)}
						</span>
					</div>
					<div className='relative ml-[62px] mr-[40px] flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='275'
							height='12'
							viewBox='0 0 275 12'
							fill='none'
						>
							<path
								d='M0 6C0 2.68629 2.68629 0 6 0H269C272.314 0 275 2.68629 275 6C275 9.31371 272.314 12 269 12H5.99999C2.68629 12 0 9.31371 0 6Z'
								fill='#505050'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='108'
							height='10'
							viewBox='0 0 108 10'
							fill='none'
							className='absolute top-[50%-5px]'
						>
							<path
								d='M0 5C0 2.23858 2.23858 0 5 0H103C105.761 0 108 2.23858 108 5C108 7.76142 105.761 10 103 10H5C2.23858 10 0 7.76142 0 5Z'
								fill='#F2F2F2'
							/>
						</svg>
						<span className='text-white ml-[12px] text-sm'>1/3</span>
					</div>
					<div className='w-[143px] h-[40px] rounded-[12px] text-[#EDEDED] flex justify-center items-center bg-gradient-to-r from-[#353535] to-[#2E2E2E] cursor-pointer text-sm align-bottom'>
						Start Learning
					</div>
				</div>
			)
		})
	}
	return (
		<div className='w-[1083px] h-[328px] bg-[#101010] py-[40px] pt-[26px] px-[24px] rounded-[20px] relative'>
			<span className='text-[#EDEDED] font-bold leading-4 text-base absolute top-[40px]'>
				Milestones
			</span>

			<Tabs
				defaultValue='Course Completion'
				className='inline-flex  flex-col  items-end  '
				onValueChange={e => {
					console.log(e)
					setActive(e)
				}}
			>
				<TabsList className='inline-flex justify-end items-center  '>
					<TabsTrigger value='Course Completion'>
						{active === 'Course Completion'
							? '<Course Completion/>'
							: 'Course Completion'}
					</TabsTrigger>
					<TabsTrigger value='Quest Winning Streak'>
						{active === 'Quest Winning Streak'
							? '<Quest Winning Streak/>'
							: 'Quest Winning Streak'}
					</TabsTrigger>
					<TabsTrigger value='Track Completion'>
						{active === 'Track Completion'
							? '<Track Completion/>'
							: 'Track Completion'}
					</TabsTrigger>
				</TabsList>
				<TabsContent value='Course Completion'>
					<div className='mt-[32px] h-[200px] overflow-y-auto'>
						{createlist()}
					</div>
				</TabsContent>
				<TabsContent value='Quest Winning Streak'>
					<div className='mt-[32px] h-[200px] overflow-y-auto'>
						{createlist()}
					</div>
				</TabsContent>
				<TabsContent value='Track Completion'>
					<div className='mt-[32px] h-[200px] overflow-y-auto'>
						{createlist()}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
