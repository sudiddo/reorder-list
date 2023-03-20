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
    if (index === 0) return
    const newItems = [...items]
    const item = newItems[index]
    newItems.splice(index, 1)
    newItems.splice(index - 1, 0, item)
    setItems(newItems)
  }

  const moveDown = (index: number) => {
    if (index === items.length - 1) return
    const newItems = [...items]
    const item = newItems[index]
    newItems.splice(index, 1)
    newItems.splice(index + 1, 0, item)
    setItems(newItems)
  }

  return (
    <div className="h-screen w-screen bg-black p-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">Reorder List</h1>
        <div className="mt-10 h-[500px] w-[500px] overflow-y-auto rounded-2xl border border-white">
          {items.map((item, index) => (
            <div
              key={item}
              className="m-3 flex items-center justify-between rounded-lg border border-white px-4 py-2 transition-all duration-100 ease-in-out"
            >
              <div className="flex w-full flex-row items-center">
                <div className="mr-2">{index + 1}.</div>
                <div className="w-full">{item}</div>
                <div className="flex flex-row">
                  <button
                    onClick={() => moveUp(index)}
                    className="mr-1 rounded-full border bg-white p-1 transition-opacity duration-200 hover:opacity-50"
                  >
                    <AiOutlineArrowUp color="black" />
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    className="rounded-full border bg-white p-1 transition-opacity duration-200 hover:opacity-50"
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