import Link from 'next/link'

const Sidebar = () => {
    return (
        <aside className='bg-gray-600 p-4 w-64'>
            <nav>
                <ul space-y-2>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar