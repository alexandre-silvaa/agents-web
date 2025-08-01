import { CircleLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <CircleLoader color="white" />
    </div>
  );
}
