import Code from "../../assets/Code.png"

export default function Footer() {
    return (
        <footer className="py-3">
            <div className="flex justify-between px-3 md:px-10">
                <span>&copy;2025</span>
                <p className="flex gap-2">
                    <img src={Code} alt="code" /> Desenvolvido por{" "}
                    <span className="text-[#11B0C8]">Felipe Cordeiro</span>
                </p>
            </div>
        </footer>
    );
}