import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

const Footer = () => (
    <div className="w-full mt-11 mb-4 flex flex-row items-center justify-between">
        <span className={`text-sm font-light ${jetBrainsMono.className}`}>
            <Link href={"mailto:drew@drew.so"}>drew@drew.so</Link>
        </span>
        <div className="flex flex-row items-center gap-2">
            <Link href={"https://github.com/drewlowe"}>
                <Github size={16} color={'hsl(var(--foreground))'}/>
            </Link>
            <Link href={"https://x.com/drewsowhat"}>
                <Twitter size={16} color={'hsl(var(--foreground))'}/>
            </Link>
            <Link href={"https://github.com/drewlowe/drewso"}>
                <span className={`text-sm cursor-pointer font-light ${jetBrainsMono.className}`}>
                    Source
                </span>
            </Link>
        </div>
    </div>
)

export default Footer