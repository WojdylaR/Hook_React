import { useState, useEffect } from "react"

export function useIncrement (start:number, step: number) {
    const [count, setCount] = useState(start)

    const increment = function (){
        setCount((c: any) => c  + step)
    }
    return [count, increment] as const
}

export function useAutoIncrement (start:number, step:number){
    const [count, setCount] = useState(start)
    useEffect (
        function ()
        {
            const timer = window.setInterval(function () {setCount((c: any) => c  + step)}, 1000)
            return function () {
            clearInterval(timer)
        }
    }, [])

    return count
}