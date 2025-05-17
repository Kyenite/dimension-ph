import Header from "@components/Header"
import Image from "next/image"

export default function Maintenance() {
    return (
        <div className="bg-lime-300 h-[100vh] overflow-hidden">
            <Header />
            <main>
                <div className="py-28 h-screen">
                    <div className="m-auto flex flex-col gap-4">
                        <Image className="m-auto drop-shadow-lg" src={"/images/error/503.png"} alt={"Maintenance"} width={150} height={150} />
                        <div className="text-center space-y-4">
                            <h1 className="text-4xl font-bold bg-gradient-to-t from-green-700 to-lime-400 bg-clip-text text-transparent text-shadow-md">
                                This Page is Under Maintenance
                            </h1>
                            <hr className="w-[80vw] max-w-4xl mx-auto" />
                            <p className="text-lg max-w-xl mx-auto text-gray-900">
                                We&apos;re currently performing scheduled maintenance to improve your experience. Our team is working hard to bring everything back online as soon as possible.
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