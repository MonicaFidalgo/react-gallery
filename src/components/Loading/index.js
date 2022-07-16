import { BallTriangle } from "react-loader-spinner";
function Loading() {
  return (
    <div className="loading">
      <BallTriangle color="#dc3545" height={90} width={90} />
    </div>
  );
}
export default Loading;
