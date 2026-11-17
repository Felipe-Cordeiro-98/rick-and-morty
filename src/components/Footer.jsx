import CodeIcon from "../assets/icons/code.svg";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-6 border-t-2 border-[#D9D9D9]">
            <p>&copy; {new Date().getFullYear()}</p>

            <div className="flex gap-2">
                <img className="w-6 h-6" src={CodeIcon} alt="" />
                <p>
                    Desenvolvido por <span className="text-primary font-bold">Felipe Cordeiro</span>
                </p>
            </div>
        </footer>
    );
}
