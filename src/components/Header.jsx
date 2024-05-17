import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <nav>
                <ul className='flex space-x-4 items-center p-4'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/dashboard'>Dashboard</Link></li>
                    <li><Link href='/noticias'>Noticias</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header