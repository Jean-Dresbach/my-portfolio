import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState, setTheme } from "./redux"

export function Root() {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme)

  // Efeito para aplicar o tema no body ou html
  useEffect(() => {
    if (
      theme.mode === "dark" ||
      (theme.mode === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1>React App with Tailwind Dark/Light Theme</h1>
      <button onClick={() => dispatch(setTheme("light"))}>Light Mode</button>
      <button onClick={() => dispatch(setTheme("dark"))}>Dark Mode</button>
      <button onClick={() => dispatch(setTheme("system"))}>
        System Preference
      </button>
    </div>
  )
}
