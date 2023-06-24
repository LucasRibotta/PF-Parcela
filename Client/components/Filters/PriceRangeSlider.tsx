"use client"

import "tailwindcss/tailwind.css"
import { useState, useEffect, useRef } from "react"
import style from '@/components/Filters/priceRangeSlider.module.css'

type SliderProps = {
  initialMin: number
  initialMax: number
  min: number
  max: number
  step: number
  priceGap: number
}

export default function PriceRangeSlider({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceGap
}: SliderProps) {
  const progressRef = useRef<HTMLDivElement>(null!)
  const [minValue, setMinValue] = useState(initialMin)
  const [maxValue, setMaxValue] = useState(initialMax)

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((maxValue - minValue >= priceGap) && maxValue <= max) {
      if (parseInt(e.target.value) > maxValue) {
      } else {
        setMinValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value))
      }
    }
  }

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if ((maxValue - minValue) >= priceGap && maxValue <= max) {
      if (parseInt(e.target.value) < minValue) {
      } else {
        setMaxValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value))
      }
    }
  }

  useEffect(() => {
    const styleLeft = (minValue / max) * step + "%";
    const styleRight = step - (maxValue / max) * step + "%"
    progressRef.current.style.left = styleLeft
    progressRef.current.style.right = styleRight
  }, [minValue, maxValue, max, step])

  return (
    <div className="flex flex-col w-96 px-6 py-2">
      <div className="flex justify-between items-center my-6 ">
        <div className="rounded-md">
          <span className="p-2  text-white"> Min</span>
          <input
            onChange={(e) => setMinValue(parseInt(e.target.value))}
            type="number"
            value={minValue}
            className="w-24 rounded-md border"
          />
        </div>
        <div className="ml-2 text-lg text-white"> - </div>
        <div className=" ">
          <span className="p-2 text-white"> Max</span>
          <input
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
            type="number"
            value={maxValue}
            className="w-24 rounded-md border "
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-white">
          <div
            className="progress absolute h-1 bg-[#51a8a1] rounded "
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative  ">
          <input
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMin}
            className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none'
          />
          <input
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMax}
            className='range-max absolute w-full -top-1 h-1 bg-transparent appearance-none rounded-full pointer-events-none'
          />
        </div>
      </div>
    </div>
  )
};

  // <div className="p-20px w-400px bg-red-500">
    //   <div className="bg-blue-500 flex items-center pt-17px ">
    //     <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
    //       <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
    //       <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default"></span><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default"></span>
    //     </div>
    //     <span id="min-price" data-currency="€" className="slider-price">0</span> <span className="seperator">-</span> <span id="max-price" data-currency="€" data-max="3500" className="slider-price">3500 +</span>
    //   </div>
    // </div>