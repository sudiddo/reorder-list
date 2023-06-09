import { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

function App() {
  const [items, setItems] = useState([
    'Aji',
    'Budi',
    'Caca',
    'Dedi',
    'Euis',
    'Fafa',
    'Gigi',
    'Hani',
    'Icha',
    'Joko',
    'Kiki',
    'Lili',
    'Mimi',
    'Nana',
    'Ocha',
    'Pipi',
    'Qiqi',
    'Riri',
    'Susi',
    'Tuti',
    'Ucha',
    'Vivi',
    'Wawa',
    'Xixi',
    'Yaya',
    'Zizi'
  ])

  const moveUp = (index: number) => {
    // Check if the item is already at the top then return
    if (index === 0) return
    // Create a new array from the items
    const newItems = [...items]
    // Get the item from the new array
    const item = newItems[index]
    // Remove the item from the new array
    newItems.splice(index, 1)
    // Insert the item to the new array
    newItems.splice(index - 1, 0, item)
    // Set the new array to the items
    setItems(newItems)
    // Animate the item
    animate(index)

    // Why we need to use new Array instead of just using items?
    // Because we need to re-render the component
    // If we just use items, the component will not re-render
    // Why the item will not re-render?
    // Because array is a reference type, so when we change the array, the reference will not change
    // To make the reference change, we need to create a new array
    // So, we can use the spread operator to create a new array

    // What is reference type?
    // Reference type is a type that store the reference to the value
    // For example, array, object, function, etc
    // When we change the value of the reference type, the reference will not change so we need to create a new reference type to make the reference change

    // what is the difference between reference type and value type?
    // Value type is a type that store the value directly
    // For example, string, number, boolean, etc
  }

  const moveDown = (index: number) => {
    // Check if the item is already at the bottom then return
    if (index === items.length - 1) return
    const newItems = [...items]
    const item = newItems[index]
    newItems.splice(index, 1)
    newItems.splice(index + 1, 0, item)
    setItems(newItems)
    animate(index)
  }

  const animate = (index: number) => {
    const element = document.getElementById(`item-${index}`)
    if (!element) return
    element.classList.add('animate-pulse')
    setTimeout(() => {
      element.classList.remove('animate-pulse')
    }, 2000)
  }

  return (
    <div className="h-screen w-screen bg-black p-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">Reorder List</h1>
        <div className="mt-10 h-[500px] w-[300px] overflow-y-auto rounded-2xl border border-white lg:w-[500px]">
          {items.map((item, index) => (
            <div
              id={`item-${index}`}
              key={item}
              className="m-3 flex items-center justify-between rounded-lg border border-white px-4 py-2 transition-all duration-1000 ease-in-out"
            >
              <div className="flex w-full flex-row items-center">
                <div className="mr-2">{index + 1}.</div>
                <div className="w-full">{item}</div>
                <div className="flex flex-row">
                  <button
                    disabled={index === 0}
                    onClick={() => moveUp(index)}
                    className="mr-1 rounded-full border bg-white p-1 transition-opacity duration-200 hover:opacity-50 disabled:opacity-40"
                  >
                    <AiOutlineArrowUp color="black" />
                  </button>
                  <button
                    disabled={index === items.length - 1}
                    onClick={() => moveDown(index)}
                    className="rounded-full border bg-white p-1 transition-opacity duration-200 hover:opacity-50 disabled:opacity-40"
                  >
                    <AiOutlineArrowDown color="black" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
