import Link from 'next/link'
import CardFlip from '../components/CardFlip'

const Sidebar = () => {
    return (
        <aside className='bg-slate-100 p-4 w-64'>
            <nav>
                <ul space-y-2 className='flex flex-col'>
                    <Link href='#' className='transition ease-in-out text-gray-900 hover:bg-sky-600 duration-200'>Link 1</Link>
                    <Link href='#' className='transition ease-in-out text-gray-900 hover:bg-sky-600 duration-200'>Link 2</Link>
                    <Link href='#' className='transition ease-in-out text-gray-900 hover:bg-sky-600 duration-200'>Link 3</Link>
                    <Link href='#'>
                        <CardFlip 
                            legenda='teste' />
                    </Link>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar