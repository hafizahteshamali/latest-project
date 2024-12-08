import Sidebar from "../../Components/Sidebar/Sidebar"
import Content from "./Content"
import { SidebarData1, SidebarData2, SidebarData3, SidebarData3kaHeadin, SidebarData4, SidebarData5, SidebarData6, SidebarData6kaHeadin } from "./SidebarData"

const ShopLayout = () => {
  return (
    <div className="flex w-[1100px] m-auto">
        <Sidebar data1={SidebarData1} data2={SidebarData2} SidebarData3={SidebarData3} data3kiheading={SidebarData3kaHeadin} SidebarData4={SidebarData4} SidebarData5={SidebarData5} SidebarData6={SidebarData6} SidebarData6kaHeadin={SidebarData6kaHeadin}/>
        <Content/>
    </div>
  )
}

export default ShopLayout