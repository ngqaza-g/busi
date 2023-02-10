export default function Led({ state = false }){ 
    const color = "DA5B4A"

    const light = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='35' ry='35' stroke='%23${color}FF' stroke-width='5' stroke-dasharray='1%2c 15' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e")`;

    return <div style={{
        width: "70px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage : state ? light : "none",
        borderRadius: "35px",
    }}>
        <div style={{
            width: "50px",
            height: "50px",
            border: `1px solid #${color}`,
            borderRadius: "50%",
            overflow: "hidden"
            
        }}
        >
            <div style={{
                width: "100%",
                height: "100%",
                backgroundColor: `#${color}`, 
                opacity: state ? "1" : "0.1" 
            }}

            />
        </div>
    </div>
}