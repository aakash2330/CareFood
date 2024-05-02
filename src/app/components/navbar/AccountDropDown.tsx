import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
export default function DropDownAccountMenu({ name }: { name: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{name}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#f6f6f6]">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/order-history"}>Order History</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Link href={"/register-ngo"}>Register NGO</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
