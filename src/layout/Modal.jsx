import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function DropDown({ children }) {
  return (
    <div className="mr-[0.1rem]">
      <Menu as="div" className="relative text-left z-30">
        <div>
          <Menu.Button className="flex items-center navItem">
            <span className="lg:text-text_secondary mr-1 text-gray-300">
              Services
            </span>
            <i className="ri-arrow-down-s-line lg:text-text_secondary text-gray-300" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div>{children}</div>
        </Transition>
      </Menu>
    </div>
  );
}
