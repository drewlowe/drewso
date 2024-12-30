import { ThemeToggle } from "@/components/ThemeToggle"

export default function Header() {
    return (
        <div className="w-full mt-4 mb-11 flex flex-row items-center justify-between">
            <h2 className='font-bold text-lg'>
                Drew Lowe
            </h2>
            <ThemeToggle />
        </div>
    )
}