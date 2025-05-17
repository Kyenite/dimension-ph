import Header from "@components/Header"
import Image from "next/image"

export default function UnderDevelopment() {
    return (
        <div className="bg-lime-300 h-[100vh] overflow-hidden">
            <Header />
            <main>
                <div className="py-28 h-screen">
                    <div className="m-auto flex flex-col gap-4">
                        <Image className="m-auto drop-shadow-lg" src={"/images/error/403.png"} alt={"Maintenance"} width={150} height={150} />
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold bg-gradient-to-t from-green-700 to-lime-400 bg-clip-text text-transparent text-shadow-md">
                                This Page is Under Development
                            </h1>
                            <hr className="w-[80vw] max-w-4xl mx-auto" />
                            <p className="text-lg max-w-xl mx-auto text-gray-900">
                                We&apos;re currently building this page to serve you better. Our team is working diligently to complete it and make it available as soon as possible.
                            </p>
                            <p className="text-sm text-gray-900">
                                We appreciate your patience and understanding. If you need assistance, feel free to contact us at <span className="text-green-700 font-bold underline">demensionph1@gmail.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}