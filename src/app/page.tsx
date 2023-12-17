import { pixelifySans } from "@config/fonts";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const Home = () => {
  return (
    <main className="container flex justify-center items-center h-screen">
      <h1 className={pixelifySans.className}>40 99 00 123</h1>
      <div className="w-[200px] h-[200px]">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src="/hero-card-complete.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Home;
