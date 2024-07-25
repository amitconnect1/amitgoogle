export default function Homepage(){
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "40px"}}>
      You are in Home Page currently

      <button onClick={() => {
        alert("Sent Successfully")
      }}>Click to send home event</button>
    </div>
  )
}