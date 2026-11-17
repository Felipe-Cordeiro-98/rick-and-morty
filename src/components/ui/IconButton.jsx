export default function IconButton({ icon, text, className = "", iconSize = 24, disabled = false, onClick }) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`
                flex items-center gap-2 
                p-2 rounded-4xl 
                cursor-pointer select-none 
                disabled:opacity-50 disabled:cursor-not-allowed 
                ${className}`}
        >
            {icon && <img src={icon} alt="" width={iconSize} height={iconSize} />}
            {text}
        </button>
    );
}
