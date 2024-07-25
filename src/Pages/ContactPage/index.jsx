export default function ContactPage(){
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "40px"}}>
      You are in Contact Page currently

      <button onClick={() => {
        alert("Sent Successfully")
      }}>Click to send contact event</button>
    </div>
  )
}