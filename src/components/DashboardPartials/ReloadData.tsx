import condNormal from "@image/normal.jpeg";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const ReloadData = () => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={condNormal}
        width={450}
        height={200}
      />
      <CardFooter className="absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-tiny">Get new data.</p>
          <p className="text-white text-tiny">You can reload data manually.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Reload
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReloadData;
