import { pixelifySans } from "@config/fonts";
import { Avatar, AvatarGroup, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="px-6 lg:px-32 py-4 flex justify-between items-center">
        <Link href="/">
          <div className={`flex items-center gap-4 ${pixelifySans.className}`}>
            <Image
              src="/logo-app.svg"
              alt="logo"
              title="Dashboard"
              width={18}
              height={18}
            />
            <h1>IOT DHT22</h1>
          </div>
        </Link>
        <nav>
          <Link href="">
            <AvatarGroup size="sm">
              <Avatar src="/wokwi.png" />
              <Avatar src="/license-icon.png" />
              <Avatar src="/github.svg" />
            </AvatarGroup>
          </Link>
        </nav>
      </header>
      <div className="px-6 lg:px-32">
        <Divider />
      </div>
    </>
  );
};

export default Header;
