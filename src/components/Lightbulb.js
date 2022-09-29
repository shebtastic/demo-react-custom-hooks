import {useLightBulb} from "../hooks"

function Lightbulb() {
    const [state, {on, off, toggle, stomp, repair}] = useLightBulb()

    function getBackgroundForState() {
        // eslint-disable-next-line default-case
        switch(state) {
            case "on":
                return "yellow"
            case "off":
                return "grey"
            case "broken":
                return "red"
        }
    }

    return (
        <div>
            <div style={{
                height: "50px",
                width: "50px",
                background: getBackgroundForState()
            }}></div>
            <button onClick={on}>On</button>
            <button onClick={off}>Off</button>
            <button onClick={toggle}>Toggle</button>
            <button onClick={stomp}>Break</button>
            <button onClick={repair}>Repair</button>
        </div>
    )
}

export default Lightbulb