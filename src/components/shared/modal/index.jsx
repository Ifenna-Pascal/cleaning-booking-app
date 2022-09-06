import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal({ isOpen, closeModal, children }) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full bg-[#1A1A1A] bg-opacity-70  md:inset-0 h-full md:h-full md:max-h-fit flex justify-center items-center'
				onClose={closeModal}
			>
				<div className='relative p-4 w-full max-w-xl h-full'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Dialog.Panel className='relative transform bg-white dark:bg-black shadow-xl transition-all border-2 border-theme-main rounded-[10px] p-4'>
							<div className='lg:p-3'>{children}</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}