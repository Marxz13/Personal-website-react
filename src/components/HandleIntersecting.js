import { useEffect } from "react";

function useIntersecting(options,ref,callback){
    useEffect(() => {
        const target = ref.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    callback();
                }
            });
        },options);

        if(target){
            observer.observe(target);
        }
        
        return () => {
            observer.unobserve(target);
        };
    },[options,ref,callback])
}

export default useIntersecting;
