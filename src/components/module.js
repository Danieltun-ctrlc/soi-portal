import { useParams, useOutletContext } from "react-router-dom";

export default function Module() {
  let { moduleId } = useParams();
  const { mo, de } = useOutletContext();

  if (mo === moduleId) {
    return (
      <div>
        <p>{de}</p>
      </div>
    );
  } else {
  }
}
