import condDry from "@image/drought.jpeg";
import condNormal from "@image/normal.jpeg";
import PropsReloadData from "@interface/PropsReloadData";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const ReloadData = (props: PropsReloadData) => {
  let imageCond;

  if (props.condition === "dryness") {
    imageCond = condDry;
  } else {
    imageCond = condNormal;
  }
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={imageCond}
        width={450}
        height={200}
      />
      <CardFooter className="absolute bg-black/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-tiny">Get new data.</p>
          <p className="text-white text-tiny">You can reload data manually.</p>
        </div>

        {props.children}
      </CardFooter>
    </Card>
  );
};

ReloadData.defaultProps = {
  condition: "normal",
  children: <></>,
};

export default ReloadData;
