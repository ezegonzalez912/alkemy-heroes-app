import { useState } from "react";
import { heroesByName } from "../services/heroes"

export const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [load, setLoad] = useState(false)

    const getHeroesByName = (name) => {
        setLoad(true)
        const res = new Promise((resolve) => {
            heroesByName(name)
            .then(response => {
                setHeroes(response.data.results)
                setLoad(false)
                return resolve("ok")
            })
            .catch( () => {
                setLoad(false)
                return resolve("ok")
            })
        })

        return res
    }

    return {heroes, getHeroesByName, load}
}
