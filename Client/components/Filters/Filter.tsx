import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import { RangeSlider } from "../RangeSlider/RangeSlider"
import { filterParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch } from "@/redux/hooks"
import AllButton from "../AllButton/AllButton"
import { Menu, Transition } from "@headlessui/react"

export default function Filter() {
  const dispatch = useAppDispatch()

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterBy = event.target.value
    dispatch(filterParcelas(filterBy))
  }

  return (
    <>
      <div className="flex justify-between fixed items-center bg-white w-full lg:px-[4rem] xl:px-[12rem] pt-8 pb-1 z-[40] overflow-hidden">
        <div className="flex gap-4">
          <AllButton />
          <select
            className=" text-gray-600 hover:text-gray-400 duration-200 text-[0.80rem] font-semibold focus:outline-none focus:ring-none focus:ring-none"
            onChange={handleFilterChange}
          >
            <option value="">SUPERFICIE EN M²</option>
            <option value="5000">5.000M²</option>
            <option value="5500">5.000M² a 5.500M²</option>
            <option value="10000">5.500M² a 10.000M²</option>
            <option value="10000+">10.000M²</option>
          </select>
          <Order />
          <div className="fixed right-[42%] xl:right-[54%] top-[99px]">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" text-gray-600 hover:text-gray-400 duration-200 text-[0.80rem] font-semibold focus:outline-none focus:ring-none focus:ring-none">
                  PRECIO
                </Menu.Button>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-[15rem] px-[1rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <RangeSlider
                        initialMin={0}
                        initialMax={100000}
                        min={0}
                        max={100000}
                        step={100}
                        priceCap={1000}
                      />
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        {/* <RangeSlider
              initialMin={0}
              initialMax={60000000}
              min={0}
              max={60000000}
              step={100}
              priceCap={1000}
            /> */}

        {/* <div className="flex relative items-center ">
          <h2 className="font-bold text-lg">Filtros</h2>
          <SearchBar />
          <div className="mb-4">
            <select className="block text-sm font-medium w-full p-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ad68be]">
              <option value="">Ubicación</option>
              <option value="Camino a Ensenada">Camino a Ensenada</option>
              <option value="Camino a Nueva Braunau">
                Camino a Nueva Braunau
              </option>
              <option value="Con vista al Volcan">Con Vista al Volcan</option>
              <option value="Monte Calvario">Monte Calvario</option>
              <option value="Philippi">Philippi</option>
              <option value="Puerto Chico">Puerto Chico</option>
              <option value="Puerto Varas">Puerto Varas</option>
            </select>
          </div>
s     
        </div> */}
      </div>
    </>
  )
}
