import { Link } from "react-router";

export default function IconLink({ icon, text, to, className = "", iconSize = 24 }) {
    return (
        <Link
            to={to}
            className={`
                flex items-center gap-2
                p-2 rounded-4xl
                cursor-pointer select-none
                ${className}
            `}

        >
            {icon && <img src={icon} alt="" width={iconSize} height={iconSize} />}

            {text}
        </Link>
    );
}
