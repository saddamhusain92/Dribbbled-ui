import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon,
  Bars3Icon,
  BellIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  ExclamationCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ApexChart from '../chart'
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://lh3.googleusercontent.com/a/ACg8ocI7EVxJAaciPVzZdT7BIw_pMgWqgrfRxvKMPUgmNBZuWaM=s192-c-mo",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Explore", href: "#", current: false },
  { name: "Tasks ", href: "#", current: false },
  { name: "Learners", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 gap-3 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://static.wixstatic.com/media/3cc439_2e9e8007d46d4fd9891a49915cb8c932~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3cc439_2e9e8007d46d4fd9891a49915cb8c932~mv2.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="https://static.wixstatic.com/media/3cc439_2e9e8007d46d4fd9891a49915cb8c932~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3cc439_2e9e8007d46d4fd9891a49915cb8c932~mv2.png"
                        alt="Your Company"
                      />
                      <p className="text-lg font-semibold ">Impowering</p>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Create Course
                      <ChevronDownIcon
                        className="-mr-0.5 h-4 w-4"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="px-16 bg-slate-100">
          <header className="py-4">
            <div className="mx-auto flex justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-md font-semibold leading-tight tracking-tight text-gray-900">
                Overview
              </h1>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative text-xs font-semibold inline-flex items-center rounded-l-md px-2 py-2 text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  Week
                </a>

                <a
                  href="#"
                  className="relative text-xs inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  Month
                </a>
                <a
                  href="#"
                  className="relative text-xs hidden items-center px-4 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  Quarter
                </a>

                <a
                  href="#"
                  className="relative text-xs inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  Year
                </a>
              </nav>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-5 sm:gap-3 sm:grid-cols-5 gap-3">
                <div className="bg-white grid grid-cols-1 rounded-md gap-2 content-between  shadow overflow-hidden sm:rounded-lg p-3">
                  <ArchiveBoxIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-md font-bold">1.5k</p>
                    <span className="block mb-1 text-xs font-medium text-gray-400">
                      Course View
                    </span>
                  </div>
                </div>
                <div className="bg-white grid grid-cols-1 rounded-md gap-2 content-between  shadow overflow-hidden sm:rounded-lg p-3">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-md font-bold">2.8k</p>
                    <span className="block mb-1 text-xs font-medium text-gray-400">
                      Total learning hours
                    </span>
                  </div>
                </div>
                <div className="bg-white grid grid-cols-1  rounded-md gap-2 content-between  shadow overflow-hidden sm:rounded-lg p-3">
                  <UsersIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-md font-bold">258</p>
                    <span className="block mb-1 text-xs font-medium text-gray-400">
                      Student enrol
                    </span>
                  </div>
                </div>
                <div class="bg-white grid grid-cols-1 gap-2  rounded-md content-between  shadow overflow-hidden sm:rounded-lg p-3">
                  <CheckCircleIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-md font-bold">120</p>
                    <span className="block mb-1 text-xs font-medium text-gray-400">
                      Tasks completed
                    </span>
                  </div>
                </div>
                <div class="bg-white grid grid-cols-1  rounded-md gap-2 content-between  shadow overflow-hidden sm:rounded-lg p-3">
                  <ExclamationCircleIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-md font-bold">12</p>
                    <span className="block mb-1 text-xs font-medium text-gray-400">
                      Tasks due
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 mt-3 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-3 sm:grid-cols-2 gap-3">
                <div className="bg-white  shadow overflow-hidden sm:rounded-lg">
                <ApexChart label={"Course"} />
 
                </div>
                <div className="bg-white  shadow overflow-hidden sm:rounded-lg">
                <ApexChart label={"Tasks/Assignment"}/>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 mt-3 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-3 sm:grid-cols-3 gap-3">
                <div className="bg-white  shadow overflow-hidden sm:rounded-lg">
                  <p className="font-semibold px-3 pt-2">Student enrolled</p>
                  <ul role="list">
                    {people.map((person) => (
                      <li key={person.email}>
                        <div className="flex gap-3  px-3 mb-2  mt-2 ">
                          <div className="">
                            <img
                              src={person.imageUrl}
                              className="h-9 rounded-full w-10"
                            />
                          </div>

                          <div className="w-full">
                            <div className="flex justify-between text-sm">
                              <p>
                                <span className="font-semibold text-indigo-500">
                                  {person.name}{" "}
                                </span>
                                <span className="text-gray-400">Today</span>
                              </p>
                              <div className="bg-gray-300 mt-1 h-1.5 w-16 rounded-full">
                                <div className="bg-green-400 h-1.5 rounded-full w-10 "></div>
                              </div>
                            </div>
                            <p className="text-sm">
                              Apps in a project share features
                            </p>
                          </div>
                        </div>

                        <div className="relative mt-2 mb-2">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white  shadow overflow-hidden sm:rounded-lg">
                <p className="font-semibold px-3 pt-2">Popular Tasks</p>
                <ul role="list">
                    {people.map((person) => (
                      <li key={person.email}>
                        <div className="flex gap-3  px-3 mb-2  mt-2 ">

                          <div className="w-full">
                            <div className="flex justify-between text-sm">
                              <p>
                                <span className=" text-gray-800 font-semibold">
                                Apps in a project share features{" "}
                                </span>
                              </p>
                              
                            </div>
                            <p className="text-sm text-gray-400">
                             1,245 People Participated
                            </p>
                          </div>
                        </div>

                        <div className="relative mt-2 mb-2">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <p className="font-semibold px-3 pt-2">Group Proccess</p>
                <ul role="list">
                    {people.map((person,i) => (
                      <li key={person.email}>
                        <div className="flex gap-3  px-3 mb-2  mt-2 ">
                          <div className="w-full">
                            <div className="flex justify-between text-sm">
                              <p>
                                <span className="font-semibold">
                                  Group {i+1}
                                </span>
                              </p>
                              <div className="bg-gray-300 mt-1 h-1.5 w-16 rounded-full">
                                <div className="bg-indigo-400 h-1.5 rounded-full w-10 "></div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">
                             No of People in Group
                            </p>
                          </div>
                        </div>

                        <div className="relative mt-2 mb-2">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
