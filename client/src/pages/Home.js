import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Prices from "../components/PricesTable";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const navigation = [
  { name: "Tann Mann Stock viewer", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [data, setData] = useState(0);
  const [stock, setStock] = useState(0);

  const getData = () => {
    axios.get("http://localhost:5000/prices").then((d) => setData(d.data));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setData(data);
    setStock(option);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* <BasicSelect /> */}
      <div className="dropdown">
        <button onClick={toggleDropdown}>{"Select an option"}</button>
        {isOpen && (
          <ul className="dropdown-menu">
            {/* Map over your options and render list items */}
            {data !== 0 ? (
              data?.map((option) => (
                <li>
                  <button
                    className="font-bold bg-white font-red-50"
                    // key={option.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOptionSelect(option);
                    }}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            ) : (
              <h1>Loading</h1>
            )}
          </ul>
        )}
      </div>
      <div className="py-10">
        <Prices prop={data && { data, stock }} />
      </div>
    </>
  );
}
