import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/Pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <ul>
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
      </ul>
    </>
  )
}
