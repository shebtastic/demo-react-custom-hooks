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
  // const bla = useLocalStorage({}, "test123")
  // const bla = useLocalStorage({})
  // const bla = useLocalStorage("test123")
//    const [state, setState] = useState(() => { //lazy initializer
//      return JSON.parse(localStorage.getItem(key) ?? initialValue)
//    })

    const [state, setState] = useState()

    useEffect(() => {
      setState(JSON.parse(localStorage.getItem(key)) ?? initialValue)
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}

export {useToggle, useLightBulb, useLocalStorage}
