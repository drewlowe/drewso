import { JetBrains_Mono } from 'next/font/google'
import { ThemeToggle } from "@/components/ThemeToggle"
import Link from 'next/link'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function Header() {
    return (
        <div className="w-full mt-4 mb-5 md:mb-9 flex flex-row items-center justify-between">
            <h2 className='font-bold text-lg'>
                <Link href="/">Drew Lowe</Link>
            </h2>
            <div className={`flex flex-row text-sm font-light items-center gap-4 ${jetBrainsMono.className}`}>
                <Link href="/tech-stack">Stack</Link>
                <ThemeToggle />
            </div>
        </div>
    )
}