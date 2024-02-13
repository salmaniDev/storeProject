import { RotatingLines } from "react-loader-spinner"

function Loader() {
    return (
        <div className="loader">
            <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader