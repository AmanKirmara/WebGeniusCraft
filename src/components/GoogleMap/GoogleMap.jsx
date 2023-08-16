function GoogleMap(props) {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.793621975723!2d75.03022223584392!3d29.532538736026616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana%20125055!5e0!3m2!1sen!2sin!4v1684833694869!5m2!1sen!2sin"
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
