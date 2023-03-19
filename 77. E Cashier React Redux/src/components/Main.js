import ItemSection from "./itemSection"
import Struk from "./struk"

const Main = () => {
  return (
    <div className="row justify-content-center">
    <div className="col col-12 col-md-7">
     <ItemSection />
    </div>
    <div className="col col-12 col-md-5">
     <Struk />
    </div>
    </div>
    )
}
export default Main