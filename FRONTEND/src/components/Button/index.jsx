export default function Button({ image, alt, text, className, click}) {
    return (
        <button className={className} onClick={click} >
            <img style={{width: "auto", height: "22px"}}  src={image} alt={alt} /> 
            {text}
        </button>
    );
}
