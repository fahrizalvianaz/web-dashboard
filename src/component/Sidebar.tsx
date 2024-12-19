import burung from '../assets/7.jpg'

export const Sidebar = () => {
    return (
        <>
            <div className="sticky h-screen border-r-2">
                <div className="flex justify-start ">
                    <div className="size-16">
                        <img src={burung} alt="logo"/>
                    </div>
                    <h1 className="content-center">DashBoard</h1>
                </div>
                <div className="border-t border-gray-300 my-4 w-10/12 mx-auto"></div>
                <div className="mx-4">
                    <p className="text-xs mb-3">Main Menu</p>
                    <div className="flex rounded text-xs p-1 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-5 mr-2 stroke-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"/>
                        </svg>
                        <span className="content-center text-gray-600">Dashboard</span>
                    </div>

                </div>
            </div>
        </>
    );
};