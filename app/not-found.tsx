import Header from "@components/Header"
import Footer from "@components/Footer"
import Image from "next/image"

export default function pageNotFound() {
    return (
        <>
        <Header />
            <main className="bg-gray-100 px-10">
                <div className="py-28 h-screen">
                    <div className="m-auto flex flex-col gap-4">
                        <Image className="m-auto drop-shadow-lg" src={"/images/error/403.png"} alt={"Maintenance"} width={150} height={150} />
                        <div className="text-center space-y-4">
                            <h1 className="text-2xl lg:text-4xl font-bold bg-gradient-to-t from-green-700 to-lime-400 bg-clip-text text-transparent text-shadow-md">
                                Oops! Page Not Found
                            </h1>
                            <hr className="w-[80vw] max-w-4xl mx-auto" />
                            <p className="text-lg max-w-xl mx-auto text-gray-900">
                                The page you&apos;re looking for doesn&apos;t exist or is still under development. We may have moved the content or it&apos;s not ready just yet.
                            </p>
                            <p className="text-sm text-gray-900">
                                We appreciate your patience and understanding. If you need help or were expecting something here, feel free to reach out at <a className="text-green-700 font-bold underline" 
                                href="mailto:demensionph1@gmail.com">demensionph1@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}