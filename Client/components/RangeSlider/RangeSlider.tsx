"use client"
import React from "react"
import { useState, useEffect, useRef } from "react"

type sliderProps = {
  initialMin: number
  initialMax: number
  min: number
  max: number
  step: number
  priceCap: number
}

type CustomEvent = {
  target: HTMLInputElement
}

export const RangeSlider = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap
}: sliderProps) => {
  const progressRef = useRef(null as HTMLDivElement | null)
  const [minValue, setMinValue] = useState(initialMin)
  const [maxValue, setMaxValue] = useState(initialMax)

  const handleMin = (e: CustomEvent) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
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

  const handleMax = (e: CustomEvent) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
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
    if (progressRef.current) {
      progressRef.current.style.left = (minValue / max) * step + "%"
      progressRef.current.style.right = step - (maxValue / max) * step + "%"
    }
  }, [minValue, maxValue, max, step])

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center mb-6 mt-2 gap-2">
        <div className="rounded-md">
          <span className="p-2 ">Min CLP $</span>
          <input
            onChange={(e) => setMinValue(parseInt(e.target.value))}
            type="number"
            value={minValue}
            className="w-full rounded-md border border-gray-400 pl-2"
          />
        </div>
        <div className="rounded-md">
          <span className="p-2 ">Max CLP $</span>
          <input
            onChange={(e) => setMaxValue(parseInt(e.target.value))}
            type="number"
            value={maxValue}
            className="w-full rounded-md border border-gray-400 pl-2"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-[#49968f] rounded"
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative  ">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}
