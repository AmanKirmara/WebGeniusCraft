function GoogleMap(props) {
    return (
        <>
            <iframe
            //   sirsa map  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.793621975723!2d75.03022223584392!3d29.532538736026616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana%20125055!5e0!3m2!1sen!2sin!4v1684833694869!5m2!1sen!2sin"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9252.476155601127!2d75.75546712425361!3d29.12937158251236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123374230865f5%3A0x38fee025893181e9!2sSheesh%20mahal%20banquet!5e0!3m2!1sen!2sin!4v1692175323250!5m2!1sen!2sin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5788.440705623732!2d75.75102085736647!3d29.13176360883121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123374230865f5%3A0x38fee025893181e9!2sSheesh%20mahal%20banquet!5e1!3m2!1sen!2sin!4v1692177567343!5m2!1sen!2sin"
                width="100%"
                height={props.ht}
                style={{
                    border: "0",
                    opacity: props.op,
                    borderRadius: props.br // Add border radius style
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
        </>
    );
}

export default GoogleMap;
