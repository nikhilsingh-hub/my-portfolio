import { useEffect, useMemo, useState } from "react"

const IsVisible = (cardRef) => {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        (entries) => {
            const entry = entries[0];

            setIntersecting(entry.isIntersecting);
        },
        { threshold: 0.7 }
    ))

    useEffect(()=>{
        if (cardRef.current) {
            observer.observe(cardRef.current);
          }
      
          return () => {
            if (cardRef.current) {
              observer.unobserve(cardRef.current);
            }
          };
    },[])

    return isIntersecting;
}

export default IsVisible