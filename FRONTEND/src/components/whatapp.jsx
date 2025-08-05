import React from "react";

export default function Whatsapp(){
    return(
        <section>
        <a
          href="https://wa.me/919985454540?text=Hi%20I%20need%20some%20help"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            textDecoration: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </section>
    )
}