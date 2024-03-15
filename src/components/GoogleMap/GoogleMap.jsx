// import blockAdBlock from "blockadblock";
import { useEffect } from "react";

function GoogleMap(props) {
    useEffect(() => {
        const adBlockerEnabled = !document.querySelector('.adsbygoogle');
    
        if (adBlockerEnabled) {
          console.error('Ad blocker detected! Handle accordingly.');
        } else {
          
            
        }
      }, []);
    
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5788.440705623732!2d75.75102085736647!3d29.13176360883121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123374230865f5%3A0x38fee025893181e9!2sSheesh%20mahal%20banquet!5e1!3m2!1sen!2sin!4v1692177567343!5m2!1sen!2sin"
        width="100%"
        height={props.ht}
        style={{
          border: "0",
          opacity: props.op,
          borderRadius: props.br
        }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
      ></iframe>
    </>
  );
}

export default GoogleMap;
