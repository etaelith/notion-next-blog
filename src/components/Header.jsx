import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useAuth } from "context/AuthContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import mark from "../public/mark.svg";

const activeClassName = `bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`;
const NotActiveClassName = `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="hidden h-8 w-auto lg:block relative"
                    src={mark}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex">
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/categories"
                      className={(navData) =>
                        navData.isActive ? activeClassName : NotActiveClassName
                      }
                    >
                      Categories
                    </Link>
                    <Link
                      href="/Questions"
                      className={(navData) =>
                        navData.isActive ? activeClassName : NotActiveClassName
                      }
                    >
                      Questions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        width={48}
                        height={48}
                      />
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
                    <Menu.Items className="flex flex-col absolute -right-4 z-10 w-48 origin-top-right rounded-md bg-gray-800 text-wh py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link href="/logup" className="text-gray-700">
                        <p className="text-sm text-center">Register</p>
                      </Link>

                      <Link href="/login" className=" text-gray-700">
                        <p className="text-sm text-center">Log In</p>
                      </Link>

                      <p className="text-center font-bold">{(!user) ? 'Tag Name': user.email}</p>

                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Sign out
                      </button>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 gap-4">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                    block px-3 py-2 rounded-md text-base font-medium"
              >
                Categories
              </Link>

              <Link
                href="/questions"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Questions
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
