import { CircularProgress, LinearProgress } from "@mui/material";


function Loading() {
    return ( 
        <div
            className="
                h-full w-full
                flex justify-center items-center
            "
        >
            <CircularProgress />
        </div>
     );
}

export default Loading;