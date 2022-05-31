import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import SettingTable from "../../../components/table/settingTable";
import BillPdf from "../../../components/pdf/billPdf";
// class PdfComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           content={() => this.componentRef}
//           trigger={() => (
//             <div className = "flex text-right justify-end">
//               <img
//                 src="/svg/download.svg"
//                 alt=""
//                 width={50}
//                 className="icon"
//                 style={{ margin: "0" }}
//               />
//               <img
//                 src="/svg/shere.svg"
//                 alt=""
//                 width={50}
//                 className="icon"
//                 style={{ margin: "0" }}
//               />
//             </div>
//           )}
//         />
//         {/* <div ref={(response) => (this.componentRef = response)}>
//           <BillPdf />
//         </div> */}
//       </div>
//     );
//   }
// }

// export default PdfComponent;

const PdfComponent = () => {
  const componentRef = useRef<HTMLDivElement>(null)
  return (
      <div>
        <ReactToPrint
          content={() => componentRef.current}
          trigger={() => (
            <div className = "flex text-right justify-end">
              <img
                src="/svg/download.svg"
                alt=""
                width={50}
                className="icon"
                style={{ margin: "0" }}
              />
              <img
                src="/svg/shere.svg"
                alt=""
                width={50}
                className="icon"
                style={{ margin: "0" }}
              />
            </div>
          )}
        />
        <div ref={(response) => (componentRef)}>
          <BillPdf />
        </div>
      </div>
    
  )
}

export default PdfComponent