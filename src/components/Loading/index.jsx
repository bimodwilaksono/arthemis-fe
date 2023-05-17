import Lottie from "lottie-react";

import loading from "../../assets/loading-13.json"

function PreLoading() {
    return(
        <div>
            <Lottie animationData={loading}/>
        </div>
    )
}

export default PreLoading