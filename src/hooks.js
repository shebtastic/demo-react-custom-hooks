import {useState, useEffect} from "react"

function useToggle() {
  const [value, setValue] = useState(false)

  const toggle = () => setValue((value) => !value)

  return [value, toggle]
}

function useLightBulb() {
  const [state, setState] = useState("off")

  return [state, {
    on: () => {
      setState((state) =>
        state !== "broken" ? "on" : state
      )
    },
    off: () => setState((state) =>
      state !== "broken" ? "off" : state
    ),
    toggle: () => setState((state) => {
      if(state === "on") {
        return "off"
      } else if (state === "off") {
        return "on"
      } else {
        return state
      }
    }),
    stomp: () => setState("broken"),
    repair: () => {
      setState((state) => {
        if(state === "broken") {
          return "off"
        }
        return state
      })
    }
    //semver v1.5.12
    // major.minor.patch
  }]
}

function useLocalStorage(initialValue, key = "cgn-react-app") {
  const [state, setState] = useState(() => { //lazy initializer
    const store = localStorage.getItem(key)
    switch (store) {
      case "undefined":
        return undefined
      case null:
        return initialValue
      default:
        try {
          return JSON.parse(store)
        } catch (e) {
          return store
        }
    }
  })

  useEffect(() => {
    localStorage.setItem(key, typeof state === "string" ? state : JSON.stringify(state))
  }, [state, key])

  const remove = () => localStorage.removeItem(key)

  return [state, setState, remove]
}

export {useToggle, useLightBulb, useLocalStorage}
