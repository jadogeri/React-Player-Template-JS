import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="200"
      visible={true}

      
    />
  )
}

export default Loader