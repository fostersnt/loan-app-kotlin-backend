
export default function PdfExport ({data, targetRef}) {
   return (
      <div ref={targetRef}>
         <div>
            <table>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item?.name}</td>
                    </tr>
                ))}
            </table>
         </div>
      </div>
   )
}