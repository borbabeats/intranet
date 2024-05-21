import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <nav>
                <ul className='flex space-x-4 items-center p-4'>
                    <li><Link href='/' className='transition ease-in-out hover:text-red-500 duration-300'>Home</Link></li>
                    <li><Link href='/dashboard' className='transition ease-in-out hover:text-red-500 duration-300'>Dashboard</Link></li>
                    <li><Link href='/noticias' className='transition ease-in-out hover:text-red-500 duration-300'>Noticias</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header