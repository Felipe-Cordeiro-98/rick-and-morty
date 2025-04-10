export default function Button({ img, alt, text, className, onClick }) {
    return (
        <button className={`${className} flex items-center gap-1 rounded-3xl text-sm px-3 py-2 cursor-pointer`}
        onClick={onClick}>
            <img width="21px" height="18px" src={img} alt={alt} />
            {text}
        </button>
    );
}
