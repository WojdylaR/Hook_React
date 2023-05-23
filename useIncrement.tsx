import { useState } from "react"

function useIncrement ({start = 0}:any, {pas = 1}: any) {
    const [count, setCount] = useState (start)

    const increment = function (){
        setCount((c: any) => c  + pas)
    }

    return [count, increment]
}

export default useIncrement