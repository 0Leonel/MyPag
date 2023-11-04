import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Man from '/public/man.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Lamparas', href: '/lamparas', current: false },
  { name: 'Cosas', href: '/Cosas', current: false},
  // { name: 'Gatitos', href: '/Gatitos', current: false },
  {name: 'Contacto', href: '/Contacto', current: true},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#2B445B]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[#D08662] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-center sm:items-stretch sm:justify-between sm:grow">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                  
                  <img
                    className="h-8 w-auto bg-[#E3E3DC] rounded-full hover:bg-[#C6C6C0q]"
                    src={Man}
                    alt="Your Company"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-[#63B8D4] text-[#122625] hover:bg-[#E3E3DC]  focus:bg-[#D18B60]' : 'text-[#62D5D1] focus:bg-[#BDCBB0] hover:text-[#11140E] focus:text-[#11140E]',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current ?'bg-[#63B8D4] text-[#122625] hover:bg-[#E3E3DC]  focus:bg-[#D18B60]' : 'text-[#62D5D1] focus:bg-[#BDCBB0] hover:text-[#11140E] focus:text-[#11140E]',
                    'block text-center rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
