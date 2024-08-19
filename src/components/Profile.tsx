import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsImage, BsShield } from "react-icons/bs";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

function Profile() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className="rounded-full min-w-fit">
        <Avatar >
            <AvatarImage src='https://avatars.githubusercontent.com/u/24297997?v=4' alt="profile" />
            <AvatarFallback>PMA</AvatarFallback>
        </Avatar>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuGroup>
            <DropdownMenuItem>
            Visualizar foto
            </DropdownMenuItem>
            <DropdownMenuItem >
            Admin
            </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile
