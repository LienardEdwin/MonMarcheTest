import { useParams } from "react-router-dom";

export default function Movie(){
  let params = useParams();

  return(
    <h1>je suis le movie</h1>
  )
}
