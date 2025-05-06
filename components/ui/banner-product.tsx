import Link from "next/link";
import { buttonVariants } from "./button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Vuelve conmigo Susana porfavor</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Los mas golfos</h4>
                <p className="my-2 text-lg">Te echo de menos Isco Alarcon</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[250px] bg-cover lg:h-[500px] bg-[url('/slider-image5.jpg')] bg-center mt-5" />
        </>
    );
}

export default BannerProduct;