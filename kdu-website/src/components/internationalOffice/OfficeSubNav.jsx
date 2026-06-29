import { useEffect, useState } from "react";
import { OFFICE_NAV } from "../../data/internationalOffice";

export default function OfficeSubNav() {

    const [active,setActive]=useState("services");

    useEffect(()=>{

        const sections=document.querySelectorAll("section[id]");

        const observer=new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        setActive(entry.target.id);

                    }

                });

            },

            {

                threshold:.35

            }

        );

        sections.forEach(section=>observer.observe(section));

        return ()=>observer.disconnect();

    },[]);

    return(

<nav className="office-subnav">

<div className="office-subnav__container">

{

OFFICE_NAV.map(item=>(

<a

key={item.id}

href={`#${item.id}`}

className={`office-subnav__link ${
active===item.id
?"active":""
}`}

>

{item.label}

</a>

))

}

</div>

</nav>

    );

}