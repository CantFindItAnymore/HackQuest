'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import cn from 'classnames'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			// 'inline-flex items-start justify-start rounded-md bg-slate-100 p-1 dark:bg-slate-800',
			'border-b-2 border-[#282828]',
			className
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		className={cn(
			'inline-flex min-w-[100px] border-b-4 items-center justify-center bg-transparent  cursor-pointer  first:mr-10 last:ml-10 py-2.5 text-sm font-normal  text-[#B2B2B2] border-hidden transition-all  disabled:pointer-events-none disabled:opacity-50   data-[state=active]:text-white data-[state=active]:border-solid data-[state=active]:border-white data-[state=active]:font-bold data-[state=active]:shadow-sm dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100 data-[state=disable]:text-[#cccccc]',
			className
		)}
		{...props}
		ref={ref}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		className={cn(
			// 'mt-2 rounded-md border border-slate-200 p-6 dark:border-slate-700',
			className
		)}
		{...props}
		ref={ref}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
